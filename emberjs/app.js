App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.Store = DS.Store.extend({
    revision: 12
});

App.Router.reopen({
    rootURL: '/arisProto/'
});


/**
 *
 * rewrite Rest Adapter
 */
App.serializer = DS.RESTSerializer.extend({

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
});

App.ApplicationAdapter = DS.RESTAdapter.extend({

    serializer: App.serializer.create(),
    suffix:'.json',
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


/**
 * APP
 */

App.Router.map(function() {

    this.resource('issues', { path: '/issues' }, function() {
        this.resource('issue', { path: '/issue/:issue_id' });
    });
});


/**
 *************************************
 *  RouteS
 */



App.IssuesIndexRoute = Ember.Route.extend({
    model: function(params) {
        return this.get('store').find('issue');
    },

    renderTemplate: function() {
        this.render(
            'sidebar', // название шаблона
            {
            outlet: 'sidebar',
            into: 'issues' //шаблон где находится outlet
        });
        this.render(
            'issues_list',
            {
            outlet: 'issues_list',
            into: 'issues',
            controller:'issuesIndex'

            });


        this.render(
            'issue_detail',
            {
                outlet: 'issue_detail',
                into: 'issues'

            });
    },

    actions: {
        select: function() {
            alert(1);
        }
    }
});




App.IssueRoute = Ember.Route.extend({
    model: function(params) {
        return this.get('store').find('issue', params.issue_id);
    },



    serialize: function(issue) {
        return { issue_id: issue.get('id') };
    },

    renderTemplate: function() {
        this.render('issue_detail',
            {
                outlet: 'issue_detail',
                into: 'issues'
            });
    }
});


/***
 *
 *
 *************************
 * controllers
 */



App.IssuesIndexController = Ember.ArrayController.extend({

});

App.IssueController = Ember.ObjectController.extend({
    needs: "issues",
    issues: Ember.computed.alias("controllers.issuesIndex")
});


/**
 * ****************************
 * Models
 */

App.Issue = DS.Model.extend({
    subject: DS.attr('string')

});


