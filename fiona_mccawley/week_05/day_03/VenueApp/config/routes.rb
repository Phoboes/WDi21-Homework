Rails.application.routes.draw do


  get '/' => 'pages#home'

  get '/venues' => 'venues#index'

end
