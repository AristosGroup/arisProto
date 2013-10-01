define([
    'views/base/view',
    'text!templates/sidebar.hbs'
], function(View, template) {
    'use strict';

    var SidebarView = View.extend({
        // Automatically render after initialize
        autoRender: true,

        className: 'sidebar',

        // Save the template string in a prototype property.
        // This is overwritten with the compiled template function.
        // In the end you might want to used precompiled templates.
        template: template
    });

    return SidebarView;
});
