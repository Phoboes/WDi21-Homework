Rails.application.routes.draw do

resources :books

# CREATE
    get '/authors/new' => 'authors#new'
    post '/authors' => 'authors#create'

 # READ
    get '/authors' => 'authors#index'
    get '/authors/:id' => 'authors#show'

# UPDATE

    get 'authors/:id/edit' => 'authors#edit'
    patch '/authors/:id' => 'authors#update'

# DELETEauthors

    delete '/authors/:id' => 'authors#destroy'
end
