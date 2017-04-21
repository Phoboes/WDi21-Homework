# DNA is represented by an alphabet of the following symbols: 
# 'A', 'C', 'G', and 'T'.
# Find how many of each nucleotides are in a string that you pass in to a function.

require 'pry'


# Converted to an instance variable so our method can actually access the variable.
@nucleotides = {
  A: 0,
  C: 0,
  G: 0,
  T: 0
}

def count_nucleotides word

  # Upcase our word and split it into an array to iterate through
  word = word.upcase.split('')

  word.each do | letter |
    # Get our individual letters

    # Split the every key and value in our hash
    @nucleotides.each do | key, value |

      # Our hash's keys are symbols. Convert it to a string and compare it to our letter.
      if key.to_s == letter

        # If they match, bump a value into that key's value.
        @nucleotides[key] += 1
      end
    end
  end

  # Return our modified hash.
  @nucleotides

end

p count_nucleotides "Tasmanian"


# -------------------------------------------------------
# -------------------------------------------------------
# -------------------------------------------------------


# Alternative to the instance variable - Use a method. 
# The implicit return immediately spits out the hash you create -- You can read this within methods.

def nucleotide_score
  {
    A: 0,
    C: 0,
    G: 0,
    T: 0
  }
end

def count_nucleotides_in word
  word = word.upcase.split('')

  # Create a blank score using the nucleotide_score method above.
  score = nucleotide_score
  
    nucleotide_score.each do | key, value |

      # Ruby gives us the .count method. ["A, B, A, C, A"].count( "A" ) => 3.
      # This means we don't actually need to iterate our word array, we can just add our count to the score key's value.
      score[ key ] = word.count( key.to_s )
    end

  score

end

p count_nucleotides_in "Tasmanian"
