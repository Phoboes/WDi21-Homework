require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get "/" do 
  erb(:index)
end

get "/search" do
  erb(:search)
end

get "/search_results" do
  @movie_title = params["query"]
  res = HTTParty.get("http://omdbapi.com?s=#{@movie_title}")
  @search_results = res["Search"]
  if(res["Response"] == "False")
    redirect("/error_page")
  elsif(res["totalResults"] == "1")
    redirect("/full_result/#{@movie_title}")
  end
  erb(:search_results)
end

get "/full_result/:movie_title" do
  @movie_title = params["movie_title"]
  res = HTTParty.get("http://omdbapi.com?t=#{@movie_title}")
  @poster = res["Poster"]
  @released = res["Released"]
  @genre = res["Genre"]
  @director = res["Director"]
  @plot = res["Plot"]
  erb(:full_result)
end

get "/error_page" do
  erb(:error_page)
end

