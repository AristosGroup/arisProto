define([
  'chaplin',
  'models/base/model'
], function(Chaplin, Model) {
  'use strict';

  var Issue = Model.extend({
    defaults: {
    },

      idAttribute: 'id',

      initialize: function() {
          Chaplin.Model.prototype.initialize.apply(this, arguments);
          this.on('request', this.beginSync);
          this.on('sync', this.finishSync);
          this.on('error', this.unsync);
      },



      url:function() {
          var options=852;
        return 'http://pm.proaristos.ru/issues/'+options+'.json?key=1ba9eddec017876adbb2156aafccdc027791bda0';
      },

      parse: function (response) {
          return response.issue;
      }

    // ,initialize: function(attributes, options) {
    //  Model.prototype.initialize.apply(this, arguments);
    //  console.debug('HelloWorld#initialize');
    // }
  });

    _.extend(Issue.prototype, Chaplin.SyncMachine);

  return Issue;
});
