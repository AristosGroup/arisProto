

    // Issue Item View
    // --------------

    // The DOM element for a Issue item...
   IssueView = Backbone.View.extend({
        //... is a list tag.
        tagName:  'li',


        // Cache the template function for a single item.
        template: _.template(jQuery('#item-template').html()),

        // The DOM events specific to an item.
        events: {
/*            'click .toggle': 'toggleCompleted',
            'dblclick label': 'edit',
            'click .destroy': 'clear',
            'keypress .edit': 'updateOnEnter',
            'blur .edit': 'close'*/
        },


        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);

        },

        // Re-render the titles of the issue item.
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));

            return this;
        }

    });
