require 'pry' # gives us access to binding.pry(our debugger)

puts "Welcome to our calculator"

def menu
  #show the options, receive a user input, return whatever the user typed.
  puts""
  puts "(a) - Addition"
  puts "(s) - Subtraction"
  puts "(m) - Multiplication"
  puts "(d) - Division"
  puts "(p) - Power"
  puts "(sr) - Square Root"
  puts "(bmi) - Body Mass Index"
  puts "(q) - Quit"
  puts""

print "Enter your choice: "
user_choice = gets().chomp()

  return user_choice
end

choice = menu()

def addition
  print "What is your first number? "
  first_num = gets().to_i

  print "What is your second number? "
  second_num = gets().to_i
  result = first_num + second_num
puts "#{first_num} + #{second_num} = #{result}"
end
#keep showing the menu and doing operations until the variable choice is the 'q'

def subtraction
print "What is your first number? "
first_num_sub = gets().to_i

print "What is your second number? "
second_num_sub = gets().to_i
result = first_num_sub - second_num_sub
puts "#{first_num_sub} - #{second_num_sub} = #{result}"
end

def multiplication
print "What is your first number? "
first_num_mul = gets().to_i

print "What is your second number? "
second_num_mul = gets().to_i
result = first_num_mul * second_num_mul
puts "#{first_num_mul} * #{second_num_mul} = #{result}"
end

def division
print "What is your first number? "
first_num_div = gets().to_i

print "What is your second number? "
second_num_div = gets().to_i
result = first_num_div / second_num_div
puts "#{first_num_div} / #{second_num_div} = #{result}"
end

def power
print "What is your first number? "
first_num_pow = gets().to_i

print "To the power of? "
second_num_pow = gets().to_i
result = first_num_pow ** second_num_pow
puts "#{first_num_pow} ** #{second_num_pow} = #{result}"
end

def square_root

print "Show me the square root of "
num_sq = gets().to_i
result = Math.sqrt(num_sq)
puts "Square root of (num_sq) = #{result}"
end

def bmi
print "What is your height in metres? "
first_num_bmi = gets().to_i

print "What is your weight in kg? "
second_num_bmi= gets().to_i
result = (first_num_bmi ** first_num_bmi)
puts "Your Body Mass Index (BMI) = #{result}"
end

until choice == "q"

case choice
when "a" then puts addition()
when "s" then puts subtraction()
when "m" then puts multiplication()
when "d" then puts division()
when "p" then puts power()
when "sr" then puts square_root()
when "bmi" then puts bmi()
end

choice = menu()

end

puts ""
puts "Thanks for using our calculator"
