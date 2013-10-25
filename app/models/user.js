App = require('app');

module.exports =  App.User = DS.Model.extend({
    firstname: DS.attr('string'),
    lastname: DS.attr('string'),
    email: DS.attr('string'),

    avatarSize:20,

    fullName: function() {
        return this.get('firstname') + ' ' + this.get('lastname');
    }.property('firstname', 'lastname'),

    shortName:function() {
        return this.get('firstname').substring(0,1)+this.get('lastname').substring(0,1);
    }.property('firstname', 'lastname'),

    gravatarUrl: function() {
        var email = this.get('email'),
            size = this.get('avatarSize');

       /* var jqxhr = $.get( 'http://www.gravatar.com/avatar/' + md5(email) + '?s=' + size+'&d=404', function() {
            alert( "success" );
        })

            .fail(function() {
                alert( "error" );
            });*/

        return 'http://www.gravatar.com/avatar/' + md5(email) + '?s=' + size+'&d=404';
    }.property('email', 'avatarSize')
});




App.User.FIXTURES = [
    { id: 1, firstname: 'Aleksey',lastname: 'Kuznetsov',email:'mrakobesov@gmail.com'},
    { id: 2,firstname: 'Aleksandr', lastname: 'Stanovoy',email:'soccer007@mail.ru'  }
];
