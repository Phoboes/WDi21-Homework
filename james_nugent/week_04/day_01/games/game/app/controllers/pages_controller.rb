class PagesController < ApplicationController

  def home
  end

  def magic
    answers = [
      "As I See It Yes", "Ask Again Later", "Better Not Tell You Now", "Cannot Predict Now", "Concentrate and Ask Again", "Don't Count On It", "It Is Certain", "It Is Decidely So", "Most Likely", "My Reply Is No", "My Sources Say No", "Outlook Good", "Outlook Not So Good", "Reply Hazy Try Again", "Signs Point to Yes", "Very Doubtful", "Without A Doubt", "Yes", "Yes - Definitely", "You may rely on it"
    ]

    @chosen_answer = answers.sample()

  end

  def secret
  end

  def rock_paper_scissors
  end

end
