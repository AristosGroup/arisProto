App = require('app');

module.exports =  App.IssueRoute = Ember.Route.extend({
    model: function(params) {
        return this.get('store').find('issue', params.issue_id);
    },



    setupController: function (controller, model) {

        var self = this;


        this.store.find('tag').then(function(items) {
            self.controllerFor('tags').set('content', items);
        });


        this.store.find('user').then(function(items) {
            self.controllerFor('users').set('content', items);
        });
        controller.set('content', model);
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


