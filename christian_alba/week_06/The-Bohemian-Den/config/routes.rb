Rails.application.routes.draw do

  root to: 'users#index'

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/logout' => 'session#destroy'

  resources :users, :posts
end
