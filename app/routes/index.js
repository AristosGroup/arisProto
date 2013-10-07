var IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue','green'];
  }
});

export default IndexRoute;
