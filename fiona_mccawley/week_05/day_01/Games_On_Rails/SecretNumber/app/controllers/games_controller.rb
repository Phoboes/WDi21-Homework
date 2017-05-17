class GamesController < ApplicationController

  def rock_paper_scissors
  end

  def rock_paper_scissors_play
    @throw = params["throw"]
    array = ["Rock", "Scissors", "Paper"]
    @comp_go = array.sample()

    if @throw == @comp_go
      @result = "Its a tie"
    elsif @throw == "Rock" && @comp_go == "Scissors"
      @result = "You Win"
    elsif @throw == "Paper" && @comp_go == "Rock"
      @result = "You win"
    elsif @throw == "Scissors" && @comp_go == "Paper"
      @result = "You win"
    elsif @throw == "Rock" && @comp_go == "Paper"
      @result = "You lose"
    elsif @throw == "Paper" && @comp_go == "Scissors"
      @result = "You lose"
    elsif @throw == "Scissors" && @comp_go == "Rock"
      @result = "You lose"
    end

  end

end
