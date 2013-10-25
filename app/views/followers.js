module.exports =  App.FollowersView = Ember.Select.extend({


    didInsertElement: function() {
        Ember.run.scheduleOnce('afterRender', this, 'processChildElements');
    },

    processChildElements: function() {

        var self = this;

        var formatResult = function(user) {
            var obj = self.content.find(function(item) {
            return  item.id==user.id;
            });

            //todo call from avatar helper
            //            return   App.UserAvatarComponent.create().set('user',obj).render() + obj.get('shortName');

            return '<img src="'+obj.get('gravatarUrl')+'" /> ' + obj.get('fullName');
        };


        var formatSelection = function(user) {
            var obj = self.content.find(function(item) {
                return  item.id==user.id;
            });

            return '<img src="'+obj.get('gravatarUrl')+'" /> ' + obj.get('shortName');
        };


        this.$().select2({
            width:'100%',
            formatResult: formatResult,
            formatSelection: formatSelection
        });
    },



    willClearRender: function () {
        this.$().select2("destroy");
    },

    /**
     * select2 selection react to selectionBinding changing
     */
    _underlyingSelectionDidChange: Ember.observer((function() {
        this.$().select2('val', this.$().val());
    }), "selection.@each")



});
