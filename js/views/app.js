var AppView = Backbone.View.extend({

    initialize: function() {
        this.listenTo(this.collection, 'add', this.addOne);
        this.listenTo(this.collection, 'reset', this.addAll);
        this.listenTo(this.collection, 'all', this.render);

        this.collection.fetch({
            data:
            {
                limit: 5,
                assigned_to_id:6
            },
            processData: true
        });
    },

    addOne: function (issue) {
        var view = new IssueView({ model: issue });
        $('#issues').append(view.render().el);
    },

    // Add all items in the **Todos** collection at once.
    addAll: function () {
        this.$('#issues').html('');
        this.collection.each(this.addOne, this);
    },

    render: function() {

    }
});