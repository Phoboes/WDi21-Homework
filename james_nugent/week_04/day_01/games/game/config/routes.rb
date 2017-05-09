Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
 get "/home" => "pages#home"

 get "/magic" => "pages#magic"

 get "/secret" => "pages#secret"

 get "/rock_paper_scissors" => "pages#rock_paper_scissors"

end
