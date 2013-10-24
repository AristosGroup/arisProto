App = require('app');

module.exports =  App.ApplicationRoute = Ember.Route.extend({
    actions: {
        error: function(reason) {
            alert("ERROR! " + reason.msg + ". calling _super for default behavior");

            return this._super.apply(this, arguments);
        }
    }
});


