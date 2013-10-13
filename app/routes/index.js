var IndexRoute = Ember.Route.extend({
    redirect:function() {
        this.transitionTo('issues');
    }
});

export default IndexRoute;
