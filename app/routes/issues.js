App = require('app');

module.exports =  App.IssuesRoute = Ember.Route.extend({
    model: function(params) {
        // return this.get('store').findQuery('issue',{limit:102});
        return this.get('store').findAll('issue');
    },

    setupController: function (controller, model) {
        this.controllerFor('issues').set('model', model);
    }
});

