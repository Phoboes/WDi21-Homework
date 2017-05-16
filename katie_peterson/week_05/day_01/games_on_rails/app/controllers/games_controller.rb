class GamesController < ApplicationController

  def secret_number
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] #range [1..10]?
    @random_num = numbers.sample()
    @chosen_num = params["num"].to_f

    if @random_num == @chosen_num
      @result = "You have won!"
    elsif
      @result = "Try again!"
    end
  end

  def magic_ball

  answer = [
     "It is certain",
     "It is decidedly so",
     "Without a doubt",
     "Yes definitely",
     "You may rely on it",
     "As I see it, yes",
     "Most likely",
     "Outlook good",
     "Yes",
     "Signs point to yes",
     "Reply hazy try again",
     "Ask again later",
     "Better not tell you now",
     "Cannot predict now",
     "Concentrate and ask again",
     "Don't count on it",
     "My reply is no",
     "My sources say no",
     "Outlook not so good",
     "Very doubtful"
   ]

   @answer = answer.sample()

   erb :magic_ball_answer

  end

  def rock_paper_scissors
    combos = ["rock", "paper", "scissors"]

    @computer_choice = combos.sample()

    @user_choice = params["turn"]

    if @user_choice == "rock" && @computer_choice == "paper"
      @result  = "Computer wins"
    elsif @user_choice == "rock" && @computer_choice == "scissors"
      @result  = "User wins"
    elsif @user_choice == "paper" && @computer_choice == "rock"
      @result  = "User wins"
    elsif @user_choice == "paper" && @computer_choice == "rock"
      @result  = "User wins"
    elsif @user_choice == "paper" && @computer_choice == "scissors"
      @result  = "Computer wins"
    elsif @user_choice == "scissors" && @computer_choice == "rock"
      @result  = "Computer wins"
    elsif @user_choice == "scissors" && @computer_choice == "paper"
      @result  = "User wins"
    elsif  @user_choice == "rock" && @computer_choice == "rock" ||
            @user_choice == "paper" && @computer_choice == "paper" ||
            @user_choice == "scissors" && @computer_choice == "scissors"
      @result = "Its a tie"
    end
  end

end
