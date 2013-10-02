define([
    'controllers/hello-controller',
    'models/issue',
    'views/detail-view'

], function(HelloWorldController, Issue, DetailView) {
    'use strict';

    var IssueController = HelloWorldController.extend({
        show: function(params) {

            this.compose('detail', {
                compose:function() {
                    this.model = new Issue();

                    this.detail = new DetailView({

                        params:params,
                        region:'detail',
                        model:this.model
                    });
                }
            });
        }
    });

    return IssueController;
});
