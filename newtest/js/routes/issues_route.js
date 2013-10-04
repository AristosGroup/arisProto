var Issue = require('../models/issue');

var IssueRoute = Ember.Route.extend({

  model: function() {
    return Issue.find();
  }

});

module.exports = IssueRoute;

