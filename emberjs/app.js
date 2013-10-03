App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.Store = DS.Store.extend({
    revision: 12
});


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

App.Router.map(function() {
    //this.resource('issues');
    //this.resource('issue', { path: '/issue/:issue_id' });
});

App.IndexRoute = Ember.Route.extend({
    model: function(params) {
        return this.get('store').find('issue');
    }
});

App.IssueRoute = Ember.Route.extend({
    model: function(params) {
        return this.get('store').find('issue', params.issue_id);
    }
});


App.Issue = DS.Model.extend({
    subject: DS.attr('string'),

    todoDidChange: function () {
        Ember.run.once(this, function () {
            this.get('store').commit();
        });
    }.observes( 'subject')
});