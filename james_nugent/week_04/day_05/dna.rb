require 'pry'

@nucleotides = {
A: 0,
C: 0,
G: 0,
T: 0,
U: 0
}

def count_nucleotides word
  word = word.upcase.split('').sort
  word.each do | letter |
    @nucleotides.each do | key, values |
      if key.to_s == letter
        @nucleotides[ key ] += 1
      end
    end
  end

  @nucleotides

end

p count_nucleotides "testfornukesjamesasdgfhnd"
