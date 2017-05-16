# Simple Sums

# Write a program that can calculate the sum of the first n elements of the following sequences:

# s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc
# s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc
# For example:

# s1(4) = 0
# s2(4) = 10
# Use any language of your choice.

# Can you guess what the sum would be if n is infinity?

class SimpleSums

  def initialize num
    @num = num
  end

  # 1 - 1 + 1 - 1 + 1 - 1 + //etc

  # Using an 'upto' loop because I want to start my loop from 1, not 0. 'times' would start from 0.

  # def first_sum
  #   output = 1
  #   1.upto(@num) do | i |
  #     if i % 2 == 0
  #       output -= 1
  #     else
  #       output += 1
  #     end
  #   end
  #   output
  # end

  # You may have noticed a pattern here with the loop, you can just check whether the number is odd or even

  # def first_sum
  #   output = 1
  #     if @num % 2 == 0
  #       output = 0
  #     else
  #       output = 1
  #     end
  #   output
  # end

  # Ternary operators behave like extremely short if/else statements. 
  # They follow consistent structure like this:
  # ( condition ) ? (true case) : (false case)

  # If the condition is true, it runs the first block, if not, it does the second.

  def first_sum
    @num % 2 == 0 ? 0 : 1
  end

  # 1 + 2 + 3 + 4 + 5 + 6

  # I'm using output to store the previous step in the cycle and += to add it to i.

  # def second_sum
  #   output = 0;
  #   1.upto( @num ) do | i |
  #     output = output + i
  #   end
  #   output
  # end

  def second_sum
    ( @num * (@num + 1) ) / 2
  end

end


sum = SimpleSums.new( 4 )

p sum.first_sum
p sum.second_sum


# sum = SimpleSums.new( Float::INFINITY )
# => 1