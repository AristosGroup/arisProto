var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function(){
    this.resource('issues', { path: '/issues' }, function() {
        this.resource('issue', { path: '/issue/:issue_id' });
    });
});

export default Router;
