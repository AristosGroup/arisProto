var IssueRowView = Ember.View.extend( {
    classNames: ['row'],
    classNameBindings: ['isEnabled:enabled:disabled'],
    isEnabled: false,
    content: null,
    click:function(){

        this.set('isEnabled',true);
        this.get('controller').send('active',this.content);
    },
    // Just to show you can get the current index here too...
    adjustedIndex: function() {
        return this.get('_parentView.contentIndex') + 1;
    }.property()
});

export default IssueRowView;