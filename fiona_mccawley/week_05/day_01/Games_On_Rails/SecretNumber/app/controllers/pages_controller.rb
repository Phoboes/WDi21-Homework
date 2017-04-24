class PagesController < ApplicationController

  def home

  end

  def secret_number
  # Secret Number
  #
  # Users click a number between 1 and 10. The controller validates the guess and renders the win or lose view.

    @number = params["number"].to_i
    array = (1..10).to_a
    @secret_number = array.sample()

    if @number == @secret_number
      @result = "Win"
    else
      @result = "Try again"
    end

  end

end
