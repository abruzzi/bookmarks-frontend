#encoding: utf-8
require 'spec_helper'

describe 'Feeds List Page' do
	let(:list_page) {FeedListPage.new}

	before do
		list_page.load
	end

	it 'user can see a banner and some feeds' do
		expect(list_page).to have_banner
		expect(list_page).to have_feeds
	end

	it 'user can see 3 feeds in the list' do
		expect(list_page.all_feeds).to have_feed_items count: 3
	end

	it 'feed has some detail information' do
		first = list_page.all_feeds.feed_items.first
		expect(first.title).to eql("Python中的 list comprehension 以及 generator")
	end
end