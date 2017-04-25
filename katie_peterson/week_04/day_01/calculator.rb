require 'pry' #gives us access to binding.pry (Our debugger)

puts "Welcome to our calculator"

# create a method called menu

def menu
  #Show the options
  puts ""
  puts"(a) - Addition"
  puts"(s) - Subtraction"
  puts"(m) - Multipication"
  puts"(d) - Division"
  puts"(sq) - Squareroot"
  puts"(e) - Exponent"
  puts"(q) - Quit"
  puts"(bmi) - BMI"
  # receive a user imput
  print "Enter your choice: "
  user_choice = gets().chomp()

  # return whatever the user typed.
  return user_choice

end


#If there are no parameters, use parenthesis.
choice = menu() # => "a"

# if the choice is a, add some numbers

def addition
  print "What is your first number?"
  first_num = gets().to_i  #turns a string into an integer

  print "What is the second number?"
  second_num = gets().to_i

  result = first_num + second_num
  puts "#{first_num} + #{second_num} = #{result}"
end

def subtraction
  print "What is your first number?"
  first_num = gets().to_i  #turns a string into an integer

  print "What is the second number?"
  second_num = gets().to_i

  result = first_num - second_num
  puts "#{first_num} - #{second_num} = #{result}"
end

def multipaction
  print "What is your first number?"
  first_num = gets().to_i  #turns a string into an integer

  print "What is the second number?"
  second_num = gets().to_i

  result = first_num * second_num
  puts "#{first_num} * #{second_num} = #{result}"
end

def division
  print "What is your first number?"
  first_num = gets().to_i  #turns a string into an integer

  print "What is the second number?"
  second_num = gets().to_i

  result = first_num / second_num
  puts "#{first_num} / #{second_num} = #{result}"
end

def square_root
  print "Enter the number you would like the square root of: "
  num = gets().to_i  #turns a string into an integer

  result = Math.sqrt (num)
  puts "The square root of #{num} = #{result}"
end

def exponent
  print "What is your base number?"
  first_num = gets().to_i  #turns a string into an integer

  print "To the power of: "
  second_num = gets().to_i

  result = first_num ** second_num
  puts "#{first_num} ^ #{second_num} = #{result}"
end

def bmi
  print "What is your height (in metres)?"
  height = gets().to_f  #turns a integer into a string

  print "What is your weight (in kgs)? "
  weight = gets().to_f

  result = ( ( weight / height ) / (height) ).to_s
  puts "Your BMI is: #{result}"
end

#Keep showing the menu and doing operations until the variable choice is the string "q".

until choice == "q"
  case choice
  when "a" then addition()
  when "s" then subtraction()
  when "m" then multipaction()
  when "d" then division()
  when "sq" then square_root()
  when "e" then exponent()
  when 'bmi' then bmi()
  end

  choice = menu()

end

puts ""
puts "Thanks for using our amazing calculator!"
