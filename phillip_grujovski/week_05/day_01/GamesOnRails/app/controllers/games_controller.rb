class GamesController < ApplicationController
  def index
  end

  def secret_number
    @number_to_guess = Random.rand(1..10)
    @guess = params["guess"]
  end

  def magic_ball
    answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it",
      "As i see it, yes", "Most likely", "Outlook good", "Yes", "Sings point to yes", "Reply hazy try again",
      "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
      "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]
    @answer = answers.sample()
    @question = params["question"]
  end

  def rock_paper_scissors
    @options = ["rock", "paper", "scissors"]
    @user_throw = params["throw"].to_s.downcase()
    @computer_throw = @options.sample()
    
    if(@user_throw == @computer_throw)
      @winner = "We threw the same thing, try again."
    elsif(@user_throw == "rock" && @computer_throw == "scissors")
      @winner = "You win!"
    elsif(@user_throw == "rock" && @computer_throw == "paper")
      @winner = "Computer wins!"
    elsif(@user_throw == "paper" && @computer_throw == "scissors")
      @winner = "Computer wins!"
    elsif(@user_throw == "paper" && @computer_throw == "rock")
      @winner = "You win!"
    elsif(@user_throw == "scissors" && @computer_throw == "rock")
      @winner = "Computer wins!"
    elsif(@user_throw == "scissors" && @computer_throw == "paper")
      @winner = "You win!"
    end
  end

end