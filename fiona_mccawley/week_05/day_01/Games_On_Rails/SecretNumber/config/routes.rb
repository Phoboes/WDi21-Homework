Rails.application.routes.draw do

  get "/home" => "pages#home"


  get "/secret/:number" => "pages#secret_number"

end
