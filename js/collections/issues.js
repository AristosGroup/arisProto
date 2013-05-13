//Collection
IssueCollection = Backbone.Collection.extend({
    model: Issue,

    queryParams:{

    },

    url: function () {
        return 'http://pm.proaristos.ru/issues.json?key=1ba9eddec017876adbb2156aafccdc027791bda0';
    },


    parse: function (resp, options) {
        return resp.issues;
    },

    setLimit: function (limit, offset) {
        this.queryParams['limit'] = limit;
        this.queryParams['offset'] = offset;
    },

    setProjectId: function (projectId) {
        this.queryParams['projectId'] = projectId;
    }



});