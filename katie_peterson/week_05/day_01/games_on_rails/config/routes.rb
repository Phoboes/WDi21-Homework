Rails.application.routes.draw do

  get "/home" => "pages#home"

  get "/about" => "pages#about"

  get "/secret_number/:num" =>"games#secret_number"

  get"/magic_ball" => "games#magic_ball"

  get"/rock_paper_scissors/:turn" => "games#rock_paper_scissors"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
