/*jslint browser: true, jquery: true */ 
/*global App: true, require: false, Ember: false, module: false*/

// ===== Namespace =====
window.App = require ('app');

App.Store = DS.Store.extend({
    revision: 12
});


App.ApplicationAdapter = DS.FixtureAdapter.extend({

    queryFixtures: function(fixtures, query, type) {
        return fixtures;
    }
});


App.Router.reopen({
    rootURL: '/',
    location: 'history'
});


// ===== Router =====
App.Router.map(function() {

    this.resource('issues', { path: '/issues' }, function() {
        this.resource('issue', { path: '/issue/:issue_id' });
        this.route('new');
    });
	
});

// ===== Routes =====
require ('routes/application');
require ('routes/index');
require ('routes/issue');
require ('routes/issue_index');
require ('routes/issues');

// ===== Store =====


// ===== Models =====
require ('models/issue');
require ('models/project');
require ('models/status');
require ('models/tag');
require ('models/user');


// ===== Views =====
require ('views/issue-row');
require ('views/issues-grid');
require ('views/tags');


// ===== Controllers =====

require ('controllers/issue');
require ('controllers/issues');
require ('controllers/alltags');
// ===== Template Helpers =====


// ===== Mixins =====

require ('mixins/list-view/main');

// ===== Templates =====
require ('templates/application');
require ('templates/issue');
require ('templates/issues');
require ('templates/sidebar');
require ('templates/pull-to-refresh');
