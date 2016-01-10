require 'rubygems'
require 'bundler/setup'
require 'sinatra'

get '/' do
    File.open('public/index.html').read
end

get '/api/feeds' do
	content_type 'application/json'
	File.open('mocks/feeds.json').read
end

get '/api/fav-feeds/:id' do
	content_type 'application/json'
	File.open('mocks/fav-feeds.json').read
end

post '/api/feeds/:id' do
	
end
