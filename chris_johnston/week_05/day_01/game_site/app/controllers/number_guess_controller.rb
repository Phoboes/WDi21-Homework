class NumberGuessController < ApplicationController

def computer_number
    possible_number = ["1","2","3","4","5","6","7","8","9"]
    @robot_number = possible_number.sample()
    @user_number = params["number"]
  if @robot_number === @user_number
    @message = "winner"
  elsif @robot_number != @user_number
    @message = "try again"
    end
  end
end
