var IssueController = Ember.ObjectController.extend({
    needs: "issues",
    issues: Ember.computed.alias("controllers.issues")
});

export default IssueController;