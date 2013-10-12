var  IssuesController = Ember.ArrayController.extend({
/*    needs: "issue",
    issue: Ember.computed.alias("controllers.issue"),*/

    actions:{
        new:function() {
            var store = this.get('store');

            var issue = store.push('issue', {
                id: Math.floor(Math.random()*1000),
                subject:''

            });


            this.transitionTo('issue', issue) ;

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
                subject:''

            });

            this.transitionTo('issue', newIssue);
        }
    }
});

export default IssuesController;