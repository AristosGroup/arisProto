App = require('app');

module.exports =  App.Tag = DS.Model.extend({
    title: DS.attr('string'),
    text:function(){
        return this.get('title');
    }.property('title')



});


App.Tag.FIXTURES = [
    { id: 1, title: 'Design'},
    { id: 2,title: 'Develop'  },
    { id: 3,title: 'Test'  }
];

