Rails.application.routes.draw do
  get "/" => "pages#home"

  get "/about" => "pages#about"

  get "/games/secret" => "games#secret"

  get "/games/secret/:number" => "games#secret_number"

  get "/games/magic" => "games#magic"

  get "/games/magic/response" => "games#magic_response"

  get "games/rock_paper_scissors" => "games#rock_paper_scissors"

  get "/games/rock_paper_scissors/:throw" => "games#rock_paper_scissors_play"

end
