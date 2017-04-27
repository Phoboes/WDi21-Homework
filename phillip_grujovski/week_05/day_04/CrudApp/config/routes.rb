Rails.application.routes.draw do
  resources :chefs
  resources :recipes

  root "home#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
