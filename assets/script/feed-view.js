var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('lodash');

Backbone.$ = $;

var template = require('../templates/feed-view.hbs');

module.exports = Backbone.View.extend({
    initialize: function(model) {
        this.model = new Backbone.Model(model);
        this.model.bind('change', _.bind(this.render, this));
    },

    tagName: 'li',

    className: 'feed',
    
    render: function() {
        var html = template(this.model.toJSON());
        this.$el.html(html);

        return this.$el;
    },	
});