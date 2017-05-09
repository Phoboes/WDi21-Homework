Rails.application.routes.draw do

  get 'oceans/index'

  get 'oceans/show'

  get 'oceans/new'

  get 'oceans/edit'

  root 'pages#home'

  get '/home' => 'pages#home'
  get '/about'=> 'pages#about'

  get "/oceans" => "oceans#index"
  get "/oceans/new" => "oceans#new"
  post "/oceans" => "oceans#create"
  get "/oceans/:id" => "oceans#show"
  get "/oceans/:id/edit" => "oceans#edit"
  post "/oceans/:id" => "oceans#update"

  delete "/oceans/:id/delete" => "oceans#destroy"
end
