
App = require('app');
module.exports =  App.IssuesController = Ember.ArrayController.extend({
    needs: "issue",
    issue: Ember.computed.alias("controllers.issue"),
    IssuesGridView:App.IssuesGridView,

    groupBy:'status',
  //  groupType:Ember.ArrayProxy,
    actions:{
        new:function() {
            var store = this.get('store');

            var issue = store.push('issue', {
                id: Math.floor(Math.random()*1000),
                subject:'',
                status:2

            });


            this.transitionTo('issue', issue) ;

        },

        active:function(issue) {

            this.transitionToRoute('issue',issue);
        },

        save:function(issue)
        {


            var store = this.get('store');


            /**
             * Сохраняем
             * @type {*}
             */

           // store.commit();

            /**
             * Добавляем новое поле
             * @type {*}
             */

            var newIssue = store.push('issue', {
                id: Math.floor(Math.random()*1000),
                subject:'',
                status:2

            });

            this.transitionTo('issue', newIssue);
        }
    }
});
