var Issue = DS.Model.extend({
    subject: DS.attr('string'),
    project: DS.hasMany('project'),
    description: DS.attr('string'),
    created_on: DS.attr('date')

});



export default Issue;