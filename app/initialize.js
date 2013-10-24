/*jslint browser: true, jquery: true */ 
/*global App: true, require: false, Ember: false, module: false*/

// ===== Namespace =====
window.App = require ('app');

App.Store = DS.Store.extend({
    revision: 12
});


/**
 *
 * rewrite Rest Adapter
 */
/*App.serializer = DS.RESTSerializer.extend({

    extractMeta: function(store, type, payload) {

        var hash = {};

        if (payload && payload.total_count) {
            hash['total_count'] = payload.total_count;
            hash['offset'] = payload.offset;
            hash['limit'] = payload.limit;
            store.metaForType(type, hash);
            delete payload.total_count;
            delete payload.offset;
            delete payload.limit;
        }
    }
});*/

App.ApplicationAdapter = DS.RESTAdapter.extend({

    host:'http://aris.proaristos.ru/api',
   /* serializer: App.serializer.create(),*/
    suffix:false,
    bulkCommit: false,

    headers: {
        "X-Redmine-API-Key": "1ba9eddec017876adbb2156aafccdc027791bda0"
        //  "X-Redmine-Nometa":1

    },

    buildURL : function(type, id) {
        var url = this._super(type, id);
        if(this.suffix)
            url = url+this.suffix;

        return url;

    }
});


App.Router.reopen({
    rootURL: '/',
    location: 'history'
});


// ===== Router =====
App.Router.map(function() {

    this.resource('tags', { path: '/tags' });
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
require ('models/project');
require ('models/status');
require ('models/tag');
require ('models/user');
require ('models/issue');


// ===== Views =====
require ('views/issue-row');
require ('views/issues-grid');
require ('views/tags');
require ('views/followers');


// ===== Controllers =====
require ('controllers/tags');
require ('controllers/issue');
require ('controllers/issues');
require ('controllers/users');
// ===== Template Helpers =====


// ===== Mixins =====

require ('mixins/list-view/main');

require ('helpers/avatar');

// ===== Templates =====
require ('templates/application');
require ('templates/issue');
require ('templates/issues');
require ('templates/sidebar');
require ('templates/pull-to-refresh');
