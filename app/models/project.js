/**
 * Created by ak on 07.10.13.
 */
var Project = DS.Model.extend({
    name: DS.attr('string'),
    issues: DS.hasMany('issue')

});


Project.FIXTURES = [
    { id: 1, name: 'Project 1' },
    { id: 2, name: 'Project 2'    }
];


export default Project;