Rails.application.routes.draw do

get "/home" => "pages#home"

get "/eightball/:question" => "eight_ball#user_input"

get "/numberguess/:number" => "number_guess#computer_number"

get "/numberguess" => "number_guess#computer_number"

get "/rock_paper_scissors/:throw" => "games#rock_paper_scissors_play"



end
