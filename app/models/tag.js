var Tag = DS.Model.extend({
    title: DS.attr('string'),
    text:function(){
        return this.get('title');
    }.property('title')



});


Tag.FIXTURES = [
    { id: 1, title: 'Design'},
    { id: 2,title: 'Develop'  },
    { id: 3,title: 'Test'  }
];



export default Tag;