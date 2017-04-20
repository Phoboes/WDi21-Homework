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
  res = HTTParty.get(url)
  @search = res["Search"]
  
# I want to create an array of only the titles from the list of results
  @empty_arr = []

  i = 0
  while i < @search.length
    @empty_arr.push(@search[i]["Title"])
    i += 1
  end



  # movie_name = params["t"]
  # url = "http://omdbapi.com?t=#{movie_name}"
  # res = HTTParty.get(url)
  # @poster = res["Poster"]
  erb(:search_results)
end



# http://www.omdbapi.com/?s=jaws - for list of results

  # binding.pry
