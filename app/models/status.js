App = require('app');

module.exports =  App.Status = DS.Model.extend({
    name: DS.attr('string')



});


App.Status.FIXTURES = [
    { id: 1, name: 'Open'},
    { id: 2, name: 'Complete'  }
];

