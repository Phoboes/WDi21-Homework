class GamesController < ApplicationController

  def rock_paper_scissors_play
      possible_throws = ["rock", "paper", "scissors"]
      @computer_action = possible_throws.sample()
      @action = params["throw"]


    if @action === "rock"  && @computer_action === "paper"
      @rock_paper_scissors_message = "Player wins!"
    elsif @action === "paper"  && @computer_action === "rock"
      @rock_paper_scissors_message = "Player wins!"
    elsif @action === "scissors" && @computer_action === "paper"
      @rock_paper_scissors_message = "Player wins!"
    elsif @action === "rock"  && @computer_action === "rock"
      @rock_paper_scissors_message = "Draw!"
    elsif @action === "paper"  && @computer_action === "paper"
      @rock_paper_scissors_message = "Draw!"
    elsif @action === "scissors" && @computer_action === "scissors"
      @rock_paper_scissors_message = "Draw!"
    else
      @rock_paper_scissors_message = "Computer wins!"

    end
  end
end
