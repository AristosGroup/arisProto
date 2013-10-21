App = require('app');
module.exports =  App.IssueController = Ember.ObjectController.extend({

    needs: "issues",
    issues: Ember.computed.alias("controllers.issues"),
    alltags : []

});
