define([
    'views/base/view',
    'text!templates/detail.hbs',
    'views/detail-header-view'
], function(View, template, DetailHeader) {
    'use strict';

    var DetailView = View.extend({
        // Automatically render after initialize
        autoRender: true,

        render: function() {

            var that = this;
            this.model.fetch().then(function() {
                    View.prototype.render.apply(that, arguments);
                    var header = new DetailHeader({autoRender: true, container: that.$el.find('#detail_header')});
                    that.subview('header', header);
                }

            );


        },

        className: 'detail',

        // Save the template string in a prototype property.
        // This is overwritten with the compiled template function.
        // In the end you might want to used precompiled templates.
        template: template,


        hide: function() {
            this.$el.hide();
        }
    });

    return DetailView;
});
