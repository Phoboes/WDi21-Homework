Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "/" => "pages#home"

  get "/secret" => "secret#secret"
    get "/secret/:num" => "secret#result"

  get "/magic8" => "magic8#magic8"
    get "/magic8/:value" => "magic8#answer"

  get "/rps" => "rps#rps"
    get "/rps/:choice" => "rps#outcome"
    
end
