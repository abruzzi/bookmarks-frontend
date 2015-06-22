var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');

Backbone.$ = $;

var template = require('../templates/feed-view.hbs');

module.exports = Backbone.View.extend({
    initialize: function(model) {
        this.model = new Backbone.Model(model);
        this.model.bind('change', _.bind(this.render, this));
    },

    events: {
        'click .favicon': 'toggleFavorite'
    },

    tagName: 'li',

    className: 'feed',
    
    render: function() {
        var html = template(this.model.toJSON());
        this.$el.html(html);

        return this.$el;
    },	

    toggleFavorite: function(event) {
        event.preventDefault();
        var that = this;
        $.post('/api/feeds/'+this.model.get('id')).done(function(){
            var status = that.model.get('status');
            that.model.set('status', !status);
        });
    }
});