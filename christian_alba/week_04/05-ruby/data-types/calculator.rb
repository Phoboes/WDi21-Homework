require 'pry' # Gives us access to binding.pry (our debugger)

puts "Welome to our calculator"

def menu
  # Show the options,
  # recieve a user input,
  # return whatever the user type
  puts ""
  puts "(a) - Addition"
  puts "(s) - Subtraction"
  puts "(q) - Quit"


  # Recieve a user input
  print "Enter your choice: "
  user_choice = gets().chomp()
  # user_choice = gets().chomp()
  #
  # # Return whatever the user typed
  return user_choice
end

choice = menu()

  # ADDITION SIDE OF THE CALCULATOR
def addition
  print "What is your first number? "
  first_num = gets().to_i

  print "What is your second number? "
  second_num = gets().to_i

  result = first_num + second_num
  puts "#{first_num} + #{second_num} = #{result}"
end

# keep showing the menu and doing operations until the
# variable choice is the "q"
# until choice == "q"
#
#   case choice
#   when "a" then addition()
#   when "s" then puts "You are interested in subtraction"
#   end
#
#   choice = menu()
#
# end

  # SUBTRACTION SIDE OF THE CALCULATOR
  def subtraction
    print "What is your first number? "
    first_num = gets().to_i

    print "What is your second number? "
    second_num = gets().to_i

    result = first_num - second_num
    puts "#{first_num} - #{second_num} = #{result}"
  end

  # keep showing the menu and doing operations until the
  # variable choice is the "q"
  until choice == "q"

    case choice
    when "a" then addition()
    when "s" then subtraction()
    end

    choice = menu()

  end

puts ""
puts "Thanks for using our Calculations"

##################
###
###     MORTGAGE CALCULATOR
##################


def mortgage
  print "What is the payment needed for this month?"
  monthly_payment = gets().to_i
