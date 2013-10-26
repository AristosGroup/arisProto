App = require('app');
module.exports = App.IssuesController = Ember.ArrayController.extend({
    needs: "issue",
    issue: Ember.computed.alias("controllers.issue"),
    IssuesGridView: App.IssuesGridView,



    actions: {
        new: function (prevIssue) {
            var store = this.get('store');

            if(prevIssue)
            {
                prevIssue.save();
            }
                var issue = store.createRecord('issue',{

             //   status:"1"
            });

            // store.push('issue'issue);

            var self = this;
            issue.save().then(function(){
                console.log(issue.get('id'));


                self.transitionTo('issue', issue);
            });



        },

        active: function (issue) {

            this.transitionToRoute('issue', issue);
        }
    }
});
