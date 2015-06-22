require 'sinatra'

get '/' do
    File.open('public/index.html').read
end

