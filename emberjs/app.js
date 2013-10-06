App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.Store = DS.Store.extend({
    revision: 12
});

App.Router.reopen({
    rootURL: '/arisProto/'
});

Ember.TextSupport.KEY_EVENTS={
    40: 'arrowDown',
    13: 'insertNewline',
    27: 'cancel'
};


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
    redirect: function() {
        this.transitionTo('issues');
    }
});

App.IssuesRoute = Ember.Route.extend({
    model: function(params) {
        return this.get('store').findQuery('issue',{limit:100});
    },

    setupController: function (controller, model) {
        this.controllerFor('issues').set('filteredIssues', model);
    }
});




App.IssueRoute = Ember.Route.extend({
    model: function(params) {
        return this.get('store').find('issue', params.issue_id);
    },



    serialize: function(issue) {
        return { issue_id: issue.get('id') };
    }
    ,
    actions: {
        close: function() {
            this.transitionTo('issues');
        }
    }
});


/***
 *
 *
 *************************
 * controllers
 */



App.IssuesController = Ember.ArrayController.extend({


});

App.IssueRowController = Ember.ObjectController.extend({
    actions: {
        active:function(issue) {

            this.transitionToRoute('issue',issue);
        }
    }

});

App.IssueController = Ember.ObjectController.extend({
    needs: "issues",
    issues: Ember.computed.alias("controllers.issues")
});



App.IssueRowView = Ember.View.extend( {
    classNames: ['row'],
    classNameBindings: ['isEnabled:enabled:disabled'],
    isEnabled: false,
    content: null,
    click:function(){

        this.set('isEnabled',true);
        this.get('controller').send('active',this.content);
    },
    // Just to show you can get the current index here too...
    adjustedIndex: function() {
        return this.get('_parentView.contentIndex') + 1;
    }.property()
});

App.IssueRowSubjectFieldView = Em.TextField.extend({

    arrowDown:function(evt)
    {
        alert(1);
    }
});

/**
 * ****************************
 * Models
 */

App.Issue = DS.Model.extend({
    subject: DS.attr('string'),
    project: DS.hasMany('project'),
    description: DS.attr('string'),
    created_on: DS.attr('date')

});

App.Project = DS.Model.extend({
    name: DS.attr('string'),
    issues: DS.hasMany('issue')

});


