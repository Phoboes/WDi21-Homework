require "pry"
require "sinatra"
require "sinatra/reloader"
require "httparty"



get "/search" do
  erb(:search)
end

get "/search_results" do
# Returns multiple results
  movie_name = params["t"]
  url = "http://www.omdbapi.com/?s=#{movie_name}"
  res = HTTParty.get(url)
  @search = res["Search"]
#
# # I want to create an array of only the titles from the list of results
# # Then loop through that array to create a list on the results page
# if @search.length == 1

  @empty_arr = []
  i = 0
  while i < @search.length
    @empty_arr.push(@search[i]["Title"])
    i += 1
  end
# end
  #if only one result



# returns single result, grabs poster image, as well as director and plot
  movie_name = params["t"]
  url = "http://omdbapi.com?t=#{movie_name}"
  res = HTTParty.get(url)
  @poster = res["Poster"]
  @director = res["Director"]
  @plot = res["Plot"]
  erb(:search_results)
end

# get "/poster" do
#
#   erb(:poster)
# end


# https://teamtreehouse.com/library/sinatra-dynamic-urls
# http://www.omdbapi.com/?s=jaws - for list of results

  # binding.pry
