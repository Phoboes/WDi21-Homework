require "pry"
require "sinatra"
require "sinatra/reloader"
require "httparty"

response = HTTParty.get("http://omdbapi.com?")

get "/" do
  erb :home
end

get "/results" do
  @movie = params["movie"]
  @result = HTTParty.get("https://omdbapi.com?t=#{@movie}")
# @result => {"Title":"Jaws","Year":"1975","Rated":"PG","Released":"20 Jun 1975","Runtime":"124 min","Genre":"Adventure, Drama, Thriller","Director":"Steven Spielberg", ...

# from the @result["array: key"] from the HTTParty.get ..
  @title = @result["Title"]
  @director = @result["Director"]
  @year = @result["Year"]
  @rated = @result["Rated"]
  @genre = @result["Genre"]
  @runtime = @result["Runtime"]
  @poster = @result["Poster"]
  @plot = @result["Plot"]

  erb :results
end



# binding.pry
