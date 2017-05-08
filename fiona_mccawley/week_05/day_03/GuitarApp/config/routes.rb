Rails.application.routes.draw do

  root 'pages#home'

  get '/home' => 'pages#home'

  get '/guitars' => 'guitars#index'

  get '/guitars/new' => 'guitars#new'

  post 'guitars' => 'guitars#create'

  get '/guitars/:id' => 'guitars#show'

  get '/guitars/:id/edit' => 'guitars#edit'

  post '/guitars/:id' => 'guitars#update'

  delete 'guitars/:id/delete' => 'guitars#destroy'

end
