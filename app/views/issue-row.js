require('mixins/list-view/main');
App = require('app');

module.exports =  App.IssueRowView = Ember.ListItemView.extend(Ember.ListItemViewMixin,{
    classNames: ['row'],
    classNameBindings: ['isEnabled:enabled:disabled'],
    isEnabled: false,
    content: null,
    click: function () {

        this.activate();
    },


    activate: function() {
        this.set('isEnabled', true);
        this.get('controller').send('active', this.content);
    },


    adjustedIndex: function () {
        return this.get('_parentView.contentIndex') + 1;
    }.property(),


    /**
     * title text field View
     */

    titleView: Ember.TextField.extend({
        insertNewline: function () {
            this.get('_parentView.controller').send('new', this.content);
        },

        focusIn:function() {
           // alert(23);
          //  this.get('_parentView').activate();
        },

        arrowDown: function (evt) {
            alert(12256);
        },

        becomeFocused: function () {
            this.$().focus();
        }.on('didInsertElement')

    })


});
