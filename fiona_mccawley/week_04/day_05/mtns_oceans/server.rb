require "pry"
require "sinatra"
require "sinatra/reloader"
require "sqlite3"

get "/" do
  erb(:home)
end

get "/about" do
  erb(:about)
end
