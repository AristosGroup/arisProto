//jsonp hack
Backbone.ajax = function(options) {
    options.dataType = 'jsonp';
    if (options.url.indexOf('callback=') == -1) {
        var glue = options.url.indexOf('?') == -1 ? '?' : '&';
        options.url += glue + 'callback=?';
    }
    return Backbone.$.ajax.apply(Backbone.$, [options]);
};








$(document).ready(function() {
    var issues = new IssueCollection();
    new AppView({ el: $('#main'), collection: issues });
});