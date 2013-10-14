App = require('app');

module.exports =  App.IssuesIndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo('issues');
    }
});

