require "pry" #debugger
require "sinatra" #web server
require "sinatra/reloader" #live-reloaded
require "HTTparty"

# movie_name = "Jaws" # make this dynamic
# url = "http://omdbapi.com?t=#{movie_name}"
#
# res = HTTParty.get( url )
#
# poster = res["Poster"]

get "/" do
  erb :search
end

get "/about_movie" do
   @movie = params[:title]
   url = "http://omdbapi.com?t=#{@movie}"
   movie_data = HTTParty.get url
   @movie_name= movie_data['Title']
   @director= movie_data['Director']
   @actors= movie_data['Actors']
   @year= movie_data['Year']
   @plot= movie_data['Plot']
   @poster= movie_data['Poster']

  #
  # # @poster params[:poster]
  # # url = "http://omdbapi.com?t=#{@movie_name}"
  #
  # # movie_data = HTTParty.get( url )
  # # @movies_list = movie_data['Search'].each
  # # @poster = HTTParty.get ("http://omdbapi.com?t=#{@movie_name}")
  # url = ("http://omdbapi.com?t=#{@movie_name}")
  # response = HTTParty.get('http://www.omdbapi.com/?t=jaws')

  erb (:about_movie)
end

# get '/about_movie' do
#   @movie = params[:title]
#   url = "http://omdbapi.com?s=#{@movie}"
#   movie_data = HTTParty.get url
#   @movies_list = movie_data['Search'].each
#
#   # @poster = movie_data['Poster']
#   # @movie_title = movie_data['Title']
#   # @date = movie_data['Released']
#   # @plot = movie_data['Plot']
#
#   erb :details
# end
