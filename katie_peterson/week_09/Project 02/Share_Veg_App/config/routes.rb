Rails.application.routes.draw do

  get 'conversations/index'

  get 'messages/index'

  get 'session/new'

  root to: "pages#home"

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/logout' => 'session#destroy'

  get '/users/:id/notifications' => 'users#notifications'

  resources :users do
    member do
      put "like", to: "users#upvote"
      put "dislike", to: "users#downvote"
    end
  end

  resources :items do
    resources :comments
  end

  resources :conversations do
    resources :messages
  end

    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  end
