/**
 * Created by ak on 07.10.13.
 */
var Project = DS.Model.extend({
    name: DS.attr('string'),
    issues: DS.hasMany('issue')

});

export default Project;