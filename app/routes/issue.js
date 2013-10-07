var IssueRoute = Ember.Route.extend({
    model: function(params) {
        return this.get('store').find('issue', params.issue_id);
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

export default IssueRoute;
