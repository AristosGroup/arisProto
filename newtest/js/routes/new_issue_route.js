var issue = require('../models/issue');

var NewIssueRoute = Ember.Route.extend({

  renderTemplate: function() {
    this.render('edit_issue', {controller: 'new_issue'});
  },

  model: function() {
    return issue.createRecord();
  },

  deactivate: function() {
    var model = this.get('controller.model');
    if (!model.get('isSaving')) {
      model.deleteRecord();
    }
  }

});

module.exports = NewIssueRoute;

