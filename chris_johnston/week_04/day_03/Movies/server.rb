require "pry"
require "sinatra"
require "sinatra/reloader"
require "httparty"


get "/search" do
  erb(:search)

end


get "/results" do
  @query = params["name"]
  @return = HTTParty.get("http://omdbapi.com?t=" + @query)
  @poster = @return["Poster"]
  @movie_title = @return["Title"]
  @movie_plot = @return["Plot"]
  #This value was created because in the form, we had an input with the name attribute of query.  When we add a name attribute, we guarantee taht whatever is typed in will be saved in params.
  erb(:results)

end
