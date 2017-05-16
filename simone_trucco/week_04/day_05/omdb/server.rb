require "pry"
require "sinatra"
require "sinatra/reloader"

#  literal route - http method paired with a route

get "/" do
  erb(:home) #views/home.erb
end

get "/about" do
  erb(:about) #views/about.erb
end

get "/contact" do
  # go get the content within the file views/contact.erb
    # first evaluate any ruby
    # send the html
  erb(:contact) #views/contact.erb
end

get "/add/:x/:y" do
  @first_num = params["x"].to_i
  # instance variables (prefixed with an @) share scope with the corresponding ERB file
  @second_num = params["y"].to_i
  @res = @first_num + @second_num

  erb :results
  # "#{first_num} + #{second_num} = #{res}"
end

get "/users" do
  @user_one = "Gary"
  @user_two = "Larry"
  @user_three = "Barry"

  @users = ["Groucho", "Harpo", "Gummo", "Zeppo", "Jane", "Serge", "Elke", "Bill", "Nick", "Steve", "Jacques"]
   # This would typically come from a database

  erb :users_index
end

get "/users/:username" do
  @username = params["username"]

  erb :users_show
end


get "/search" do
  erb :search
end

get "/search_results" do
  @query = params["query"]
  # @first_name = params["first_name"]
  # @last_name = params["last_name"]
    # this value has been created because in the form, we had an input with the name attribute of "query". When we ad  a nname attibute, we guarantee that whatever is typed will be saved in params
  erb :search_results
end
