define([
  'controllers/base/controller',
  'models/hello-world',
  'views/hello-world-view',
  'views/sidebar-view'
], function(Controller, HelloWorld, HelloWorldView, SidebarView) {
  'use strict';

  var HelloWorldController = Controller.extend({
    show: function(params) {
      this.model = new HelloWorld();
      this.view = new HelloWorldView({
        model: this.model,
        region: 'main'
      });

        this.view2 = new SidebarView({

            region: 'sidebar'
        });
    }
  });

  return HelloWorldController;
});
