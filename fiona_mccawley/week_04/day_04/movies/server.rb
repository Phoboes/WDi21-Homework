require "pry"
require "sinatra"
require "sinatra/reloader"
require "httparty"



get "/search" do
  erb(:search)
end

get "/search_results" do
  movie_name = params["t"]
  url = "http://www.omdbapi.com/?s=#{movie_name}"
  # movie_name = params["t"]
  # url = "http://omdbapi.com?t=#{movie_name}"
  # res = HTTParty.get(url)
  # @poster = res["Poster"]
  erb(:search_results)
end



# http://www.omdbapi.com/?s=jaws - for list of results
