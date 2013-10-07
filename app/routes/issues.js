var IssuesRoute = Ember.Route.extend({
    model: function(params) {
        return this.get('store').findQuery('issue',{limit:102});
    },

    setupController: function (controller, model) {
        this.controllerFor('issues').set('filteredIssues', model);
    }
});



export default IssuesRoute;