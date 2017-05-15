Class roman

  def initialize num
    p num
  end

  # collection  keys and values nums as keys, roman numerals as VALUES
  # 1000 => "M"

  def numbers
    {
      1000 => "M",
      500 => "D",
      100 => "C",
      50 => "L",
      10 => "X",
      5 => "V",
      1 => "I"
    }
  end

  # Loop through the collection

  def to_roman
    output = ''
    numbers.each do | key, value |

  # compare num to current keys
    while @num >= key
  # if the number is >= key, take the key's value, push it to a string
    output << value
  # take the value off the input number
    @num -= key
      end
    end
    output
  end
end

n1 = Roman.new(34)

p n1.numbers
