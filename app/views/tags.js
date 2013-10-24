module.exports =  App.TagsView = Ember.Select.extend({


    didInsertElement: function() {
        Ember.run.scheduleOnce('afterRender', this, 'processChildElements');
    },

    processChildElements: function() {


        this.$().select2({
            width:'100%'
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
