define([
    'chaplin',
    'controllers/base/controller',
    'views/grid-view',
    'views/sidebar-view',
    'views/site-view',
    'views/detail-view',
    'models/issue-collection'
], function(Chaplin, Controller, GridView, SidebarView, SiteView, DetailView, Issues) {
    'use strict';

    var HelloWorldController = Controller.extend({
        index: function(params) {


        },

        beforeAction: function() {




            this.collection = new Issues();
            var $this = this;

            this.compose('site', SiteView);

            this.compose('grid', {
                compose: function() {

                    this.view = new GridView({
                        collection: $this.collection,
                        region:'grid'
                    });


                }
            });

            this.compose('sidebar', {
                compose:function() {
                    this.sidebal = new SidebarView({
                        region:'sidebar'
                    });
                }
            });




        }
    });

    return HelloWorldController;
});
