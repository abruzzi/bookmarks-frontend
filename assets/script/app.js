var $ = require('jquery');
var FeedListView = require('./feed-list-view.js');

$(function() {
	var feeds = [
	    {
	        "id": 1,
	        "url": "http://abruzzi.github.com/2015/03/list-comprehension-in-python/",
	        "title": "Python中的 list comprehension 以及 generator",
	        "publicDate": new Date()
	    },
	    {
	        "id": 2,
	        "url": "http://abruzzi.github.com/2015/03/build-monitor-script-based-on-inotify/",
	        "title": "使用inotify/fswatch构建自动监控脚本",
	        "publicDate": new Date()
	    },
	    {
	        "id": 3,
	        "url": "http://abruzzi.github.com/2015/02/build-sample-application-by-using-underscore-and-jquery/",
	        "title": "使用underscore.js构建前端应用",
	        "publicDate": new Date()
	    }
	];

	var feedListView = new FeedListView(feeds);
	$('.container').append(feedListView.render());
});