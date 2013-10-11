/**
 * Created by ak on 07.10.13.
 */
var IssueRowController = Ember.ObjectController.extend({

/*    needs: "issues",
    issues: Ember.computed.alias("controllers.issues"),*/

    actions: {
        active:function(issue) {

            this.transitionToRoute('issue',issue);
        }
    }

});

export default IssueRowController;