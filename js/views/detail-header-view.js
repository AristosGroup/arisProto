define([
    'views/base/view',
    'text!templates/detail-header.hbs'
], function(View, template) {
    'use strict';

    var DetailHeaderView = View.extend({
        // Automatically render after initialize
        autoRender: false,


        className: 'detail_header',

        // Save the template string in a prototype property.
        // This is overwritten with the compiled template function.
        // In the end you might want to used precompiled templates.
        template: template,


        hide: function() {
            this.$el.hide();
        }
    });

    return DetailHeaderView;
});
