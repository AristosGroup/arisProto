/**
 * Created by ak on 07.10.13.
 */
var IssueRowController = Ember.ObjectController.extend({
    actions: {
        active:function(issue) {

            this.transitionToRoute('issue',issue);
        }
    }

});

export default IssueRowController;