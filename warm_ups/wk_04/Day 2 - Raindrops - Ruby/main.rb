#---------------------------------------------------------------

# Warmup - Raindrops

#---------------------------------------------------------------

# Write a program that will take a number (eg 28 or 1755 or 9, etc) and output the following:

# If the number contains 3 as a factor, output 'Pling'.
# If the number contains 5 as a factor, output 'Plang'.
# If the number contains 7 as a factor, output 'Plong'.

#---------------------------------------------------------------

require 'pry'

def pling num

  # Starting with an empty string we can push values to. This is to deal with cases like 15 => PlingPlang.

  str = ''

  # I use individual if statements because I do not want them to be dependant -- I want to check multiple conditions.


  # Small conditionals can be condensed to one line with no need for an end. This is true of things like unless and while too.
  str += "Pling" if num % 3 == 0

  # if num % 3 == 0
  #   str += "Pling"
  # end

  str += "Plang" if num % 5 == 0

  # if num % 5 == 0
  #   str += "Plang"
  # end

  str += "Plong" if num % 7 == 0

  # if num % 7 == 0
  #   str += "Plong"
  # end


  # We have access to predicate methods, .empty will return on str if it is an empty string ('').
  str += num.to_s if str.empty?

  # if str.length == 0
  #   str += num.to_s
  # end


  # Ruby allows implicit return. Placing this value last in my program is the same as saying return str.
  str

end

# binding.pry

# My function is mute, so preceeded it with a 'puts'.
# This is the same as wrapping a mute function in JS inside a console.log.
puts pling 3
