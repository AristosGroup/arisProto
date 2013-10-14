require('mixins/list-view/main');


App = require('app');

module.exports =  App.IssuesGridView = Ember.VirtualListView.extend({
    //height: 500,
   // rowHeight: 50
   // itemViewClass: IssueRowView.extend({templateName: "issue-row"})
/*     pullToRefreshViewClass: Ember.View.extend({
         classNames: ['pull-to-refresh'],
         templateName: 'pull-to-refresh',
         label: function(){
             if (this.get('refreshing')) {
                 return "Updating...";
             } else if (this.get('active')) {
                 return "Release to Refresh";
             } else {
                 return "Pull to Refresh";
             }
         }.property('refreshing', 'active')
     }),

     pullToRefreshViewHeight: 75,
     startRefresh: function(finishRefresh){
         var view = this;
         Ember.run.later(function(){
             view.get('controller').insertAt(0, {
                 subject: 'Item -1',
                 'status':2,
                 imageSrc: images[2]
             });
             finishRefresh();
         }, 1000);
     }*/
});

