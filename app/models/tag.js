var Tag = DS.Model.extend({
    title: DS.attr('string')



});


Tag.FIXTURES = [
    { id: 1, title: 'Design'},
    { id: 2,title: 'Develop'  }
];



export default Tag;