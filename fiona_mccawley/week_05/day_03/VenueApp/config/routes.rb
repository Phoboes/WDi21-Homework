Rails.application.routes.draw do


  resources :events

  get '/' => 'pages#home'

  get '/venues' => 'venues#index'

  get '/venues/new' => 'venues#new'

  post '/venues' => 'venues#create'

  get '/venues/:id' => 'venues#show'

  get '/venues/:id/edit' => 'venues#edit'

  post 'venues/:id' => 'venues#update'

  delete 'venues/:id/delete' => 'venues#destroy'

end
