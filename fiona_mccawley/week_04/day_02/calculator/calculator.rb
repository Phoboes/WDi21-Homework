require "pry"

puts "Welcome to our calculator"

#as I want to give the use a bunch of choices, I want them to see a menu
#if they type a, then that will == addition and so on

def menu
  #purpose is to show the options,
  puts "" #whenever the menu is shown, there is an empty line above it
  puts "(a) - Addition"
  puts "(s) - Subtraction"
  puts "(m) - Multiplication"
  puts "(d) - division"
  puts "(e) - exponential"
  puts "(r) - square root"
  puts "(q) - Quit"

  # receive user input
  print "Enter your choice: "
  # gets().chomp() #or I could use an implicit return, instead of the below
  user_choice = gets().chomp()

  # return whatever they typed
  return user_choice
end

choice = menu() #I'm saving the result of the menu - choice into a variable



#My addition function
def addition
  print "What is your first number? "
  first_num = gets().to_i() #this will do the gets.chomp for me, as it will extract the only the number

  print "What is the second number? "
  second_num = gets().to_i()

  result = first_num + second_num
  puts "#{first_num} + #{second_num} = #{result}"
end

#My subtraction function
def subtraction
  print "What is your first number? "
  first_num = gets().to_i() #this will do the gets.chomp for me, as it will extract the only the number

  print "What is the second number? "
  second_num = gets().to_i()

  result = first_num - second_num
  puts "#{first_num} - #{second_num} = #{result}"
end

#My multiplication function
def multiplication
  print "What is your first number? "
  first_num = gets().to_i() #this will do the gets.chomp for me, as it will extract the only the number

  print "What is the second number? "
  second_num = gets().to_i()

  result = first_num * second_num
  puts "#{first_num} * #{second_num} = #{result}"
end

#My division function
def division
  print "What is your first number? "
  first_num = gets().to_i() #this will do the gets.chomp for me, as it will extract the only the number

  print "What is the second number? "
  second_num = gets().to_i()

  result = first_num / second_num
  puts "#{first_num} / #{second_num} = #{result}"
end

#My exponential function
def exponential
  print "What is your first number? "
  first_num = gets().to_i() #this will do the gets.chomp for me, as it will extract the only the number

  print "To the power of? "
  second_num = gets().to_i()

  result = first_num ** second_num
  puts "#{first_num} ** #{second_num} = #{result}"
end

#My square root function
def square_root
  print "What is your first number? "
  first_num = gets().to_i() #this will do the gets.chomp for me, as it will extract the only the number

  print "To the power of? "
  second_num = gets().to_i()

  result = first_num ** second_num
  puts "#{first_num} ** #{second_num} = #{result}"
end



#keep showing the menu and doing operations until the variable choice is the
# string "q"
until choice == "q"

case choice
when "a" then addition()
when "s" then subtraction()
when "m" then multiplication()
when "d" then division()
when "e" then exponential()
when "r" then square_root()
end

  choice = menu()

end
puts ""
puts "thanks for using our calculator"
