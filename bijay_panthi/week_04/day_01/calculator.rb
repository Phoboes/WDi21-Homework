require 'pry' #gives us acess to binding.pry debugger

#Calculator

###Explanation

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
puts "*************************************************************************************************"
puts "Welcome to calculator"

def menu

  #Show the options,
  puts " "       #empty line
  puts "(a) - Addition"
  puts "(s) - Substraction"
  puts "(d) - Division"
  puts "(m) - Multiplication"
  puts "(e) - exponents"
  puts "(sq)- square_root"
  puts "(q) - Quit"
  # receive a user input
  print "Enter your choice: "
  user_choice = gets().chomp()
  return user_choice
end
 choice = menu()

 ### Keep showing the menu and doing operations until the variable choice is "q"

def addition
print "What is your first number? "
first_num = gets().to_i

print "What is the second number? "
second_num = gets().to_i

result = first_num + second_num
puts "#{first_num} + #{second_num} = #{result}"
end


def substraction

  print "Input your first number: "
  first_num = gets.to_i

  print "Input your Second number: "
  second_num = gets.to_i

  result = first_num - second_num
  puts "#{first_num} - #{second_num} = #{result}"
end

def division
  print "Input your first number: "
  first_num = gets.to_f

  print "Input your Second number: "
  second_num = gets.to_f

  result = (first_num / second_num)
  puts "#{first_num} / #{second_num} = #{result}"

end


def multiplication
  print "Input your first number: "
  first_num = gets.to_i

  print "Input your Second number: "
  second_num = gets.to_i

  result = (first_num * second_num)
  puts "#{first_num} * #{second_num} = #{result}"

end

def exponents
  print "Input the  number you want to find the power of: "
  first_num = gets.to_i

  print "Input the power : "
  second_num = gets.to_i

  result = (first_num ** second_num)
  puts "#{first_num} to the power #{second_num} = #{result}"

end



def square_root
  print "Input the  number you want to find the sqaure root of: "
  first_num = gets.to_i

  result = Math.sqrt(first_num)
  puts "The sqaure root of #{first_num} = #{result}"

end





 until choice =="q"
   case choice
   when "a" then addition()
   when "s" then substraction()
   when "d" then division()
   when "m" then multiplication()
   when "e" then exponents()
   when "sq" then square_root()
   end
 choice = menu()

 end

 puts " "
 puts "Thanks for using our calculator"


 puts "*************************************************************************************************"
