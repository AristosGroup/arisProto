App = require('app');
module.exports =  App.IssueController = Ember.ObjectController.extend({

    needs: ["tags","users"],
    alltags: Ember.computed.alias("controllers.tags"),
    users: Ember.computed.alias("controllers.users")

});
