Rails.application.routes.draw do

#For a given route (HTTP Method paored with a path)
#What controller do I use?
#What action do I run?
                      # 'controler#action'
  get "/home" => "pages#home"
    # For a GET request to /home
      # I want to go into the PagesController
      # I want to run the home Method dfined in PagesController
      # I want to load the pages home.html.erb

get "/about" => "pages#about"


get "/random" => "pages#random"

get "/auto/:color" => "auto#color"
# params = { "color" => _____}

get "/auto/:hp/:torque" => "auto#car_details"

get "/calc/:first_num/:operation/:second_num" => "calc#arithmetic"

end
