var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');

Backbone.$ = $;

var FeedView = require('./feed-view.js');
console.log(FeedView);

module.exports = Backbone.View.extend({
	initialize: function(model) {
        this.model = model;
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