
Issue = Backbone.Model.extend({
    idAttribute: 'id',
    url: function() {
        return 'http://pm.proaristos.ru/issues';
    }
});