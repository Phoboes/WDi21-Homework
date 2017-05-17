
Rails.application.routes.draw do


  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete 'logout' => 'session#destroy'

  resources :journals
  resources :entries
  resources :users

end
