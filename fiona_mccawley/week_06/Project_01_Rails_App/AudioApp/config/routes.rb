Rails.application.routes.draw do

get '/login' => 'session#new'

post '/login' => 'session#create'

delete '/logout' => 'session#destroy'

resources :users, :posts

root to: "pages#home"

get '/about' => "pages#about"

resources :engineers do
  member do
    put "like", to: "engineers#upvote"
    put "dislike", to: "engineers#downvote"
  end
end

resources :artists

resources :bookings

end
