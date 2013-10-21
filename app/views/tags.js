module.exports =  App.TagsView = Ember.Select.extend({


    didInsertElement: function() {
        Ember.run.scheduleOnce('afterRender', this, 'processChildElements');
    },

    processChildElements: function() {


        this.$().select2({
            width:'100%'
        });
    },

    willDestroyElement: function () {
        this.$().select2("destroy");
    }



});
