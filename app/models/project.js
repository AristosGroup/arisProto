App = require('app');

module.exports =  App.Project = DS.Model.extend({
    name: DS.attr('string'),
    issues: DS.hasMany('issue')

});


App.Project.FIXTURES = [
    { id: 1, name: 'Project 1' },
    { id: 2, name: 'Project 2'    }
];

