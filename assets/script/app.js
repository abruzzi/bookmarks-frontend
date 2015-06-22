var $ = require('jquery');
var FeedListView = require('./feed-list-view.js');
var Backbone = require('backbone');
// var FeedListModel = require('./feed-list-model.js');
var _ = require('lodash');

Backbone.$ = $;

$(function() {
	var feeds = $.get('/api/feeds');
	var favorite = $.get('/api/fav-feeds');

	$.when(feeds, favorite).then(function(feeds, favorite) {
		var ids = _.pluck(favorite[0], 'id');
		var extended = _.map(feeds[0], function(feed) {
			return _.extend(feed, {status: _.includes(ids, feed.id)});
		});

		var feedList = new Backbone.Collection(extended);
		var feedListView = new FeedListView(feedList);

		$('.container').append(feedListView.render());
	});
});