require 'pry' # Gives us access to binding.pry (our debugger)
puts "Welcome to our calculator"

def menu
  puts ""
  puts "(a) - Addition"
  puts "(s) - Subtraction"
  puts "(m) - Multiply"
  puts "(d) - Divide"
  puts "(exp) - Exponents"
  puts "(q) - Quit"

  # Receive a user input
  print "Enter your choice: "
  user_choice = gets().chomp()

  # Return whatever the user typed
  return user_choice
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

def multiply
  print "What is your first number? "
  first_num = gets().to_i()

  print "What is your second number? "
  second_num = gets().to_i()

  result = first_num * second_num
  puts "#{first_num} * #{second_num} = #{result}"
end

def divide
  print "What is your first number? "
  first_num = gets().to_i()

  print "What is your second number? "
  second_num = gets().to_i()

  result = first_num / second_num
  puts "#{first_num} / #{second_num} = #{result}"
end

def exponents
  print "---- You are in Exponents mode now ---- "
  puts ""
  puts "(log) - Logarithm"
  puts "(hex) - Hexadecimal"
  puts "(sin) - Sine"
  puts "(cos) - Cosine"
  puts "(tan) - Tangent"
  puts "(pow) - Power"
end

def power
  print "What is your number? "
  first_num = gets().to_i()

  print "To the power of which number? "
  second_num = gets().to_i()

  result = first_num ** second_num
  puts "#{first_num} ** #{second_num} = #{result}"
end

def sine
  print " Sin(?) ? "
  first_num = gets().to_i()

  result = Math::sin(first_num)
  puts "sin (#{first_num}) = #{result}"
end

def cosine
  print " Cos(?) ? "
  first_num = gets().to_i()

  result = Math::cos(first_num)
  puts "cos (#{first_num}) = #{result}"
end

def tangent
  print " Tan(?) ? "
  first_num = gets().to_i()

  result = Math::tan(first_num)
  puts "tan (#{first_num}) = #{result}"
end

def logarithm
  print " logarithm(?) ? "
  first_num = gets().to_i()

  result = Math::log(first_num)
  puts "log (#{first_num}) = #{result}"
end

def hexadecimal
  print " please enter the number wish to convert to hex : "
  first_num = gets().to_i()

  puts first_num.to_s(16) 
end

until choice == "q"

  case choice
  when "a" then addition()
  when "s" then subtraction()
  when "m" then multiply()
  when "d" then divide()
  when "exp" then exponents()
  when "pow" then power()
  when "sin" then sine()
  when "cos" then cosine()
  when "tan" then tangent()
  when "log" then logarithm()
  when "hex" then hexadecimal()

  end

  choice = menu()

end

puts ""
puts "Thanks for using our calculator"
