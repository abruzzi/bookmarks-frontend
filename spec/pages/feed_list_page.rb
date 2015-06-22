class FeedSectoin < SitePrism::Section
	element :item, '.feed-item'
	element :heart, '.favicon'
	element :heading, 'h3'

	def title
		heading.text
	end
end

class FeedListSection < SitePrism::Section
	sections :feed_items, FeedSectoin, "li"
end

class FeedListPage < SitePrism::Page 
	set_url "http://localhost:8100/"

	element :banner, '.banner'
	element :feeds, '.feeds'

	section :all_feeds, FeedListSection, ".feeds"
end