# #Calculator
#
# ###Explanation
#
# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# ###Specification:
#
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# ####Phase 1
#
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# ####Phase 2
#
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)

require "pry" # Gives us access to binding.pry (Our debugger)

puts "Welcome to our calculator"

def menu
  # Show the options
  puts ""
  puts "(a) - Addition"
  puts "(s) - Substraction"
  puts "(m) - Multiplication"
  puts "(d) - Division"
  puts "(sqrd) - Squared"
  puts "(sqrt) - Square Root"
  puts "(q) - Quit"
  # receive a user input
  print "Enter your choice: "
  user_choice = gets().chomp()
  # return whatever the user typed
  # return user_choice #this is explicit return, it would do the same thing without this line
end

choice = menu()


def addition
  print "What is your first number? "
  first_num = gets().to_i()

  print "What is your second number? "
  second_num = gets().to_i()

  result = first_num + second_num
  puts "#{first_num} + #{second_num} = #{result}"
end


def subtraction
  print "What is your first number? "
  first_num = gets().to_i()

  print "What is your second number? "
  second_num = gets().to_i()

  result = first_num - second_num
  puts "#{first_num} - #{second_num} = #{result}"
end

def multiplication
  print "What is your first number? "
  first_num = gets().to_i()

  print "What is your second number? "
  second_num = gets().to_i()

  result = first_num * second_num
  puts "#{first_num} * #{second_num} = #{result}"
end

def division
  print "What is your first number? "
  first_num = gets().to_i()

  print "What is your second number? "
  second_num = gets().to_i()

  result = first_num / second_num
  puts "#{first_num} / #{second_num} = #{result}"
end

def squared
  print "What number would you like to square? "
  num = gets().to_i()

  result = num ** 2
  puts "#{num} ^ 2 = #{result}"
end

def square_root
  print "What number would you like to get the square root of? "
  num = gets().to_i()

  result = Math.sqrt(num)
  puts "sqrt of #{num} = #{result}"
end

until choice == "q"

  case choice
  when "a" then puts addition()
  when "s" then puts subtraction()
  when "m" then puts multiplication()
  when "d" then puts division()
  when "sqrd" then puts squared()
  when "sqrt" then puts square_root()
  end

  choice = menu()

end

puts ""
puts "Thanks for using our calculator"
