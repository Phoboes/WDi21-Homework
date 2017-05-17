require 'pry'

class Roman

  def initialize num
    @num = num
  end

  # collection keys and values nums as keys, roman numerals as values
  # 1000 => "M"

  def numbers
    {
      1000 => "M",
      900 => "CM",
      500 => "D",
      400 => "CD",
      100 => "C",
      90 => "XC",
      50 => "L",
      40 => "XL",
      10 => "X",
      9 => "IX",
      5 => "V",
      4 => "IV",
      1 => "I"
    }
  end

  # Loop through the collection
  # compare num to current key
  # if the number is >= key, take the key's value, push it to a string
  # take the value off the input number

  def to_roman
    output = ''
    numbers.each do | key, value |
      while @num >= key
        output << value
        @num -= key
      end
    end
    output
  end
end


n1 = Roman.new(1990)

# p n1.numbers

p n1.to_roman



























