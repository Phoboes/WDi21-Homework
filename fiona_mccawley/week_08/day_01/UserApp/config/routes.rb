Rails.application.routes.draw do

resources :users
root "pages#app"
get "/app" => "pages#app"

end
