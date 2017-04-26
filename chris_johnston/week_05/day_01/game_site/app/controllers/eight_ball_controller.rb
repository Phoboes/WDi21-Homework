class EightBallController < ApplicationController
  def user_input
    @question = params["question"]
    possible_answers = ["yes", "no"]
    @auto_reply = possible_answers.sample
  end
end
