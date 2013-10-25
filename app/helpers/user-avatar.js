module.exports = App.UserAvatarComponent = Ember.Component.extend({
    tagName:'span',
    avatarSize:20,

    loadAvatar:function() {

        var self = this;
        var url  =this.get('gravatarUrl');


        var img = $("<img/>")
            .load(function() {
                self.$().append(img);
            })
            .error(function() {
                self.$().append('<span class="avatar" style="width:'+self.get('avatarSize')+'px; height:'+self.get('avatarSize')+'px; background: #4285f4">'+self.get('user').get('shortName')+'</span>');
            })
            .attr("src", url);


    },

    gravatarUrl: function() {

        var user = this.get('user'),
            email = user.get('email'),
            size = this.get('avatarSize');



        return 'http://www.gravatar.com/avatar/' + md5(email) + '?s=' + size+'&d=404';
    }.property('user.email', 'user.avatarSize'),


    didInsertElement: function() {
       this.loadAvatar();
    }

});
