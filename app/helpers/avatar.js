Ember.Handlebars.helper('avatar', function(user, options) {

    return  new Handlebars.SafeString('<img src="'+user.get('assigned_to').get('gravatarUrl')+'"/>');
});