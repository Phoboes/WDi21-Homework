
require "pry"
require "sinatra"
require "sinatra/reloader"

get "/" do
  erb(:home)
  # Looks into the views folder
    # Gets layout.erb
    # And, if we have told it how
    # It will then put the content of
    # home.erb in layout.erb
end

get "/about" do
  erb(:home)
  # If someone makes a request to /about
    # Load the layout.erb file
      # If the layout.erb file has a yield
      # statement in ERB delimiters
      # Place the content from contact.erb
      # over the yield statement



  "Welcome to the About Page"
end

get "/contact" do
  "Welcome to the Contact Page"
end

get "/calculator" do
   # I want to use ERB (embedded Ruby) to
   # create a dynamic web Page
   # Copy all fo the stuff from views/calculator.erb
   # Paste it over the top of any <%=yield %> statement in views
   #  layout.erb
   # Once you have done that,

end


#/divide/4.0/2.5
#/divide/16.0/3.5

get "/divide/:x/:y" do
  params = {
   x = params["x"].to_f
   y = params["y"].to_f
   res = x / y
 }
   "#{x} / #{y} = #{res}"
end
