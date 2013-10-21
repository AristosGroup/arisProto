App = require('app');

module.exports =  App.IssueRoute = Ember.Route.extend({
    model: function(params) {
        return this.get('store').find('issue', params.issue_id);
    },

    setupController: function (controller, model) {
        var alltags = this.get('store').find('tag');
        controller.set('content', model).set('alltags',alltags);
    },

    serialize: function(issue) {
        return { issue_id: issue.get('id') };
    },
    actions: {
        close: function() {
            this.transitionTo('issues');
        }
    }
});


