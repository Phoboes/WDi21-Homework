Rails.application.routes.draw do
  # HOME CONTROLLER
  get "/" => "home#index"

  # GAMES CONTROLLER
  get "games/" => "games#index"
  get "games/secret_number" => "games#secret_number"
  get "games/magic_ball" => "games#magic_ball"
  get "games/rock_paper_scissors" => "games#rock_paper_scissors"
end