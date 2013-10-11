var Issue = DS.Model.extend({
    type: DS.attr('string'),
    subject: DS.attr('string'),
    projects: DS.hasMany('project', { async: true }),
    subtasks: DS.hasMany('issue', { async: true }),
    tags: DS.hasMany('tag', { async: true }),
   // categories: DS.hasMany('category', { async: true }),
    status: DS.belongsTo('status', { async: true }),
    description: DS.attr('string'),
    created_on: DS.attr('date'),
    assigned_to: DS.belongsTo('user', { async: true }),
    followers: DS.hasMany('user', { async: true })

});


Issue.FIXTURES = [
    { id: 1, type: 1, subject: 'Related Products', description: 'Glowacki', projects: [1], status: 1, assigned_to: 1, followers: [1, 2], tags: [1] },
    { id: 2, type: 1, subject: 'Mass Compare', description: 'Dale', projects: [1, 2], status: 2, assigned_to: 2, followers: [2], tags: [2]   }
];


export default Issue;