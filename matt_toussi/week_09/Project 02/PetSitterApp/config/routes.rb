Rails.application.routes.draw do

  root "pages#home"
  post "/users/:id/rate" => 'ratings#create'

  post '/rate' => 'rater#create', :as => 'rate'
  get 'ratings/index'

  get 'ratings/show'

  get 'ratings/destroy'

  resources :bookings
  get "/available_bookings" => 'bookings#available_bookings'
  get "/booked_users" =>"bookings#booked_users"


  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/logout' => 'session#destroy'


  get "/" => "pages#home"
  get "/home" => "pages#home"

  get "/wall" => "pets#index"

  get "/book" => "pages#book"

  get "/search" => "pages#search"

  get '/users/:id/edit' => 'users#edit'
  patch '/users/:id' => 'users#update'

resources :users do
  member do
  put "like", to: "users#upvote"
  put "dislike", to: "users#downvote"

   end
end

  post "/bookings/:id/book" => "bookings#book"
  delete "/bookings/:id/unbook" => "bookings#unbook"

  resources :services, :users, :pets, :bookings


end
