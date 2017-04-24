Rails.application.routes.draw do

  get "/home" => "pages#home"

  get "/secret" => "pages#secret"

  get "/secret/:number" => "pages#secret_number"

  get "/magic" => "pages#magic"

  get "/magic/:question" => "pages#magic_response"

end
