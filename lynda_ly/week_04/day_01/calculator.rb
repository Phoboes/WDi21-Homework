#Calculator

###Explanation
  # You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.

###Specification:
  # A user should be given a menu of operations
  # A user should be able to choose from the menu
  # A user should be able to enter numbers to perform the operation on
  # A user should be shown the result
  # This process should continue until the user selects a quit option from the menu

####Phase 1
# Calculator functionality
  # Calculator should be able to do basic arithmetic (+,-, *, /)

####Phase 2#
# Advanced Calculator functionality
  # Calculator should be able to do basic arithmetic (exponents, square roots)

require 'pry' # Gives us access to binding.pry (our debugger)
puts "Welcome to our calculator"

def menu # Define the conditions of method menu - Similar to a function in JS
  puts "" # puts a blank new line for spacing
  puts "(a) - Addition"
  puts "(s) - Subtraction"
  puts "(m) - Multiplication"
  puts "(d) - Division"
  puts "(e) - Exponent"
  puts "(sr) - Square Root"
  puts "(q) - Quit"

  # Receive a user input
  print "Enter your choice: " # Prints user input on same line
  user_choice = gets().chomp() # gets user input and .chomp() removes the \n then stores the user input in variable user_choice

  # Return whatever the user typed
  return user_choice
end

choice = menu()

def addition
  print "What is your first number? " # Ask user what their first number choice is
  first_num = gets().to_i() # gets the user input and .to_i() changes it to a integer/number then stores in in a variable called first_num

  print "What is your second number? "
  second_num = gets().to_i()

  result = first_num + second_num # Add the values of first_num and second_num and store in variable result
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

def exponent
  print "What is your first number? "
  first_num = gets().to_i()

  print "What is your second number? "
  second_num = gets().to_i()

  result = first_num ** second_num
  puts "#{first_num} ** #{second_num} = #{result}"
end

def square_root
  print "What is your number? "
  first_num = gets().to_i()

  result = Math.sqrt(first_num)
  puts "#{first_num} = #{result} * #{result}"
end

until choice == "q" # Until loop - repeat below until the user input is == equal to "q" - Quit

  case choice                 # For the case of choice
  when "a" then addition()      # When user input is "a" then call the addition method
  when "s" then subtraction()   # When user input is "S" then call the subtraction method
  when "m" then multiplication()
  when "d" then division()
  when "e" then exponent()
  when "sr" then square_root()
  end

  choice = menu() # variable choice is equal to calling the menu method ??

end

puts "" # puts a blank new line for spacing
puts "Thanks for using our calculator"



# ###Bonus

# Mortgage Calculator
  # Calculate the monthly required payment given the other variables as input (look up the necessary variables)


    print "Enter the principal loan amount: "
    loan_amount = gets().chomp().to_i()
    # p loan_amount

    print "Enter the number of years of the loan: "
    loan_years = gets().chomp().to_i() *  12
    # p loan_years

    print "Enter the interest rate: "
    interest_rate = gets().chomp().to_f() / 100 #.to_f - change to float (number with decimal places for interest rates)
    # p interest_rate

    interest_monthly = interest_rate / 12
    # p interest_monthly

    term = (1 + interest_monthly) ** loan_years
    # p term

    month_mortgage = (loan_amount * (interest_monthly * term) ) / (term - 1)
    total_mortgage = month_mortgage * loan_years
    total_interest = total_mortgage - loan_amount
    puts ""
    puts "Monthly Mortgage Payment is $#{ month_mortgage.round(2) }"
    puts "Total Mortgage Payment is $#{ total_mortgage.round(2) }"
    puts "Total Interest Payment is $#{ total_interest.round(2) }"



# BMI Calculator
  # Calculate the body mass index (BMI) for an individual, given their height and weight
    print "Enter weight in kg: "
    weight = gets().chomp().to_f() #.to_f - change to float (number with decimal places for exact weight)

    print "Enter height in meters: "
    height = gets().chomp().to_f() #.to_f - change to float (number with decimal places for exact heigh)

    bmi = weight / ( height * height )
    puts ""
    puts "Your BMI is #{ bmi.round(2) }"

    case
    when bmi >= 19 && bmi <= 24.9
        puts "Healthy Weight"
    when bmi >= 25 && bmi <= 29.9
        puts "Overweight"
    when bmi >= 30
        puts "Obese"
    end


# Trip Calculator
  # Calculate a trip time and cost given inputs for
    # distance
    # miles per gallon
    # price per gallon
    # speed in miles per hour
