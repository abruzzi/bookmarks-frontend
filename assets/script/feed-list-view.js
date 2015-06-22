var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('lodash');

Backbone.$ = $;

var FeedView = require('./feed-view.js');

module.exports = Backbone.View.extend({
	initialize: function(model, itemRenderer) {
        this.model = new Backbone.Model(model);
        this.model.bind('change', _.bind(this.render, this));
    },

	tagName: 'ul',

	className: 'feeds',

    render: function() {
    	var that = this;

    	_.each(this.model.toJSON(), function(feed) {
    		return that.$el.append(new FeedView(feed).render());
    	});

        return this.$el;
    },	
});