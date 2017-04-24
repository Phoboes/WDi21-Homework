Rails.application.routes.draw do

  get "/home" => "pages#home"

  get "/secret" => "pages#secret"

  get "/secret/:number" => "pages#secret_number"

  get "/magic" => "pages#magic"

  get "/magic/response" => "pages#magic_response"

  get "games/rock_paper_scissors" => "games#rock_paper_scissors"

  get "/games/rock_paper_scissors/:throw" => "games#rock_paper_scissors_play"

end
