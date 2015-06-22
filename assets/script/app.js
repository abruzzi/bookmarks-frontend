var $ = require('jquery');
var FeedListView = require('./feed-list-view.js');

$(function() {
	$.get('/api/feeds').done(function(feeds) {
		var feedListView = new FeedListView(feeds);
		$('.container').append(feedListView.render());
	});
});