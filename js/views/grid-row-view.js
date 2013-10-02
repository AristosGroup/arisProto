define([
    'views/base/view',
    'text!templates/grid-row.hbs'
], function(View, template) {
    'use strict';

    var GridRowView = View.extend({
        // Automatically render after initialize
        autoRender: true,

        className: 'gridrow',

        // Save the template string in a prototype property.
        // This is overwritten with the compiled template function.
        // In the end you might want to used precompiled templates.
        template: template
    });

    return GridRowView;
});
