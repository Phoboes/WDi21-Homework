binding "pry"
#
# //
# // An Atbash cipher for the Latin alphabet would be as follows:
# //
# // Plain:  abcdefghijklmnopqrstuvwxyz
# // Cipher: zyxwvutsrqponmlkjihgfedcba

# Examples

# GOING TO TAKE AN INOUT
# SPLIT THAT INPUT UP SO I CAN ITERATE
#  HAVE AN ALP

Class Atbash


  def initialize input_string
    @input_string = input_string
    #
    p input_string
  end

  def encoded
    output = ""
    alphabet = ("a",,"z").to_a
    # LOOP THROUGH THE STRING TO
    @input_string.split().each do | letter |
      index = alphabet.index( letter )
      p index
      output << alphabet.reverse[ index ]
      ebd
    end
      p output
      # binding.pry
      # p letter
      # p alphabet
  end
end

coded = Atbash.new( "test" )
decoded = Atbash.new( "gvng" )
