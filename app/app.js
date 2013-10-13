import Resolver from 'resolver';
import registerComponents from 'aris/utils/register_components';

require('aris/mixins/emberella/lib/main');

var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_MODULE_RESOLVER: true,
  LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'aris', // TODO: loaded via config
  Resolver: Resolver
});

App.initializer({
  name: 'Register Components',
  initialize: function(container, application) {
    registerComponents(container);
  }
});

App.Store = DS.Store.extend({
    revision: 12
});

//App.ApplicationAdapter = DS.FixtureAdapter;


export default App;
