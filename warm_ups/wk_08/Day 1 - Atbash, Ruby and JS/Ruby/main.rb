require 'pry'

# Atbash Cipher

# The Atbash cipher is a simple substitution cipher that relies on transposing all the letters in the alphabet such that the resulting alphabet is backwards. The first letter is replaced with the last letter, the second with the second-last, and so on.

# An Atbash cipher for the Latin alphabet would be as follows:

# Plain:  abcdefghijklmnopqrstuvwxyz
# Cipher: zyxwvutsrqponmlkjihgfedcba
# It is a very weak cipher because it only has one possible key, and it is a simple monoalphabetic substitution cipher. However, this may not have been an issue in the cipher's time.

# Examples

# Encoding "test" gives "gvhg"
# Decoding "gvhg" gives "test"

# Going to take an input - 
# split that input up so I can iterate -
# have an alphabet to compare - 

# for everything in string, step through find the index within alphabet
#   have an output
#   with that index, grab the letter from a reversed alphabet


class Atbash

  def initialize input_string
    @input_string = input_string
    encoded
  end

  def encoded
    output = ""
    alphabet = ("a".."z").to_a
    @input_string.split('').each do | letter |
      index = alphabet.index( letter )
      output << alphabet.reverse[ index ]
    end
    p output
  end

end

coded = Atbash.new( "test" )

decoded = Atbash.new( "gvhg" )

































