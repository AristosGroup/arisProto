var IssueController = Ember.ObjectController.extend({

  destroy: function() {
    if (!confirm('Are i  you sure?')) return;
    this.get('model').deleteRecord();
    this.get('store').commit();
    this.get('target.router').transitionTo('issues');
  }

});

module.exports = IssueController;

