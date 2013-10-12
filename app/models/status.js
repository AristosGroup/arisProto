var Status = DS.Model.extend({
    name: DS.attr('string')



});


Status.FIXTURES = [
    { id: 1, name: 'Open'},
    { id: 2, name: 'Complete'  }
];



export default Status;