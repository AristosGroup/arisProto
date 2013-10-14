var TagsView = Ember.TextField.extend({
    classNames: ['input-xlarge', 'tags'],

    prompt: 'Please select...',

    didInsertElement: function() {
        Ember.run.scheduleOnce('afterRender', this, 'processChildElements');
    },

    processChildElements: function() {
        this.$().select2({
            multiple:true,
            tags:[    { id: 1, text: 'Design'},
                { id: 2,text: 'Develop'  },
                { id: 3,text: 'Test'  }]
        });
    },

    willDestroyElement: function () {
        this.$().select2("destroy");
    }


});
