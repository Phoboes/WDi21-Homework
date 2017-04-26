Rails.application.routes.draw do

  root 'pages#home'

  get '/home' => 'pages#home'

  get '/guitars' => 'guitars#index'

end
