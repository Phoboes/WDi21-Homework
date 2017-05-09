Rails.application.routes.draw do

  root "pages#home"
  get "/home" => "pages#home"

  get '/tasks' => "tasks#index"

  get "/tasks/new" => "tasks#new"
  post "/tasks" => "tasks#create"

  get "/tasks/:id" => "tasks#show"

  get "/tasks/:id/edit" => "tasks#edit"
  post "/tasks/:id" => "tasks#update"

  delete "/tasks/:id/delete" => "tasks#destroy"
end
