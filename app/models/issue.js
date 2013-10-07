var Issue = DS.Model.extend({
    subject: DS.attr('string'),
    project: DS.hasMany('project'),
    description: DS.attr('string'),
    created_on: DS.attr('date')

});

Issue.FIXTURES = [
    {
        id: 1,
        subject: 'Learn Ember.js'
    },
    {
        id: 2,
        subject: '...'
    },
    {
        id: 3,
        subject: 'Profit!'
    }
];

export default Issue;