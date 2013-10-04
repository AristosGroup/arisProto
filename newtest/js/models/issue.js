var Issue = DS.Model.extend({

  subject: DS.attr('string'),

  status: DS.attr('string')

});

module.exports = Issue;

