require 'sinatra'

get '/' do
    File.open('index.html').read
end

