Rails.application.routes.draw do

  # get 'serie/index'
  #
  # get 'serie/show'
  #
  # get 'serie/new'
  #
  # get 'serie/edit'

root "pages#home"

get "/home" => "pages#home"

get "/series" =>"series#index"

get "series/new" => "series#new"
post "/series" => "series#create"

get "/series/new" => "series#new" #in order to work it will have to be above the/:id getter otherwise will keep throwing an error

get "/series/:id" => "series#show"

get "series/:id/edit" => "series#edit"
post "/series/:id" => "series#update"

delete "/series/:id/delete" => "series#destroy"

end
