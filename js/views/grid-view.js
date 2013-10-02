define([
    'views/base/collection-view',
    'text!templates/grid.hbs',
    'views/grid-row-view'
], function(CollectionView, template, GridRowView) {
    'use strict';

    var GridView = CollectionView.extend({
        // Automatically render after initialize
        autoRender: true,

        className: 'grid',

        itemView: GridRowView,

        // Save the template string in a prototype property.
        // This is overwritten with the compiled template function.
        // In the end you might want to used precompiled templates.
        template: template
    });

    return GridView;
});
