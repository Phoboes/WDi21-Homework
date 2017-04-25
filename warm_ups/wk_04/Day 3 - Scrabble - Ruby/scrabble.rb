# Scrabble Score

# Write a program that, given a word, computes the scrabble score for that word.

# scrabble("cabbage")
# # => 14
# Your program should be in a file named scrabble.rb. You should be able to compute the score for any word entered by the user.

# Letter Values

# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10
# Extensions

# You can play a :double or a :triple letter.
# You can play a :double or a :triple word.

require 'pry'


# Hash rocket notation here so we keep our keys as integers.

values = {
  1 => ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2 => ["D", "G"],
  3 => ["B", "C", "M", "P"],
  4 => ["F", "H", "V", "W", "Y"],
  5 => ["K"],
  8 => ["J", "X"],
  10 => ["Q", "Z"]
}

p "Give me yo mouf wurds:"

  # Get an input, cut any whitespace or new lines off the end.
  word = gets.chomp

score = 0;

# Break our word into an array and change it to uppercase, then start looping through it.
word.upcase.split('').each do | letter | 
# Letter is an arbitrary value that refers to the index of whatever the loop is iterating. In this case, the first value.


# Now that we have our letter, start checking if it is in our values hash.
    values.each do | key, value |

      # If our value array has the letter in it, add the key value of that array to the score.
      score += key if values[ key ].include( letter )
    end

end

multiplier = {
  two: score * 2,
  three: score * 3
}


# Oh my god, string interpolation. So hot right now.
p "Your word was '#{ word }', it's worth #{ score }."

p multiplier[:two]

  # binding.pry

