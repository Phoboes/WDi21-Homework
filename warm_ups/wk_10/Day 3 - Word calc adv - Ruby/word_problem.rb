require 'pry'

class WordProblem

  def initialize question
    get_matches( question )
  end

  def get_matches string_to_match

    # (-?\d+) => Catch a digit (or many) and "-" (if any)
    # (plus|minus) => " plus " or " minus " (including spaces)
    # ( (plus|minus) (-?\d+))? ) => capture another chain if it exists

    @matches = string_to_match.match( /(-?\d+) (plus|minus) (-?\d+)( (plus|minus) (-?\d+))?/ )

    # ternary syntax:
    # condition ? true_case : false_case

    @matches.nil? ? ( raise ArgumentError, "That's too complicated!" ) : @matches

  end

  def calculate num1, operator, num2
    if operator == "plus"
      return num1 + num2
    else
      return num1 - num2
    end
  end

  def answer
    sum = calculate( @matches[1].to_i, @matches[2], @matches[3].to_i )
    if @matches[4]
      sum = calculate( sum, @matches[5], @matches[6].to_i )
    end
    sum
  end
end


# Slightly nearer answer method & chain:

  # def chained?
  #     If there is a fourth match:
  #   !@matches[4].nil?
  # end

  # def answer
  #   get_matches
  #   output = do_maths( @matches[1].to_i, @matches[2], @matches[3].to_i )
  #   output = do_maths( output, @matches[5], @matches[6].to_i ) if chained?
  #   output
  # end

WordProblem.new('What is 53 cubed?').answer