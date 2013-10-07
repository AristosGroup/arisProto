var  Serializer = DS.RESTSerializer.extend({

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



var RESTAdapter = DS.RESTAdapter.extend({

    host:'http://pm.proaristos.ru',
    serializer: Serializer.create(),
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
export default RESTAdapter;
