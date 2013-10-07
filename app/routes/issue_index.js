var IssuesIndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo('issues');
    }
});

export default IssuesIndexRoute;