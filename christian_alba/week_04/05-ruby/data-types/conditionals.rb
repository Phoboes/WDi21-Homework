# if Copnditional
# if some_condition
    # Thing to do
    # end

    # No (), no {}
    # else if is now called elseif
    # In our conditions, always use ==, not ===
    # do_something if some_condition
      # Inline Conditionals

# number = 100
# if number > 13
#   puts "#{number} is bigger than 13"
# end
#
# name = "Chico"
# if name == "Groucho"
#     puts "You are Groucho"
# elsif name == "Chico"
#     puts "You are Chico"
#   else
#     puts "You are someone else"
#   end
#
#
#   puts "42 is bigger than 13" if 42 > 13
#
#   marx_brother = "Groucho"
#   puts "You were great in Duck Soup" if marx_brother == "Groucho"
#
#   name = "Groucho"
#   if name != "Groucho"
#     puts "That is a shame"
#   end
#
#   unless name == "Groucho"
#     puts "That is a shame"
#   end
#
#   puts "That is a shame" unless name == "Groucho"
#
#   x = 1
#   unless x > 2
#     puts "#{x} is smaller that 2 (or equal)"
#   else
#     puts "#{x} is larger than 2"
#   end

  # hour = 12
  # case
  # when hour < 12
  #   puts "Good Morning"
  # when hour > 12 && hour < 17
  #   puts "Good afternoon"
  # else
  #   puts "Good Evening"
  # end
  #
  #
  # name = "Harpo"
  # case name
  # when "Harpo"
  #   puts "You are Harpo"
  # when "Gummo"
  #   puts "You are Gummo"
  # when "Chico"
  #   puts "You are Chico"
  # else
  #   puts "You are someone else"
  # end
  #
  # marx_bro = "Harpo"
  # case marx_bro
  # when "Harpo" then puts "You are Harpo"
  # when "Groucho" then puts "You were great in Duck Soup"
  # when "Gummo" then puts "That mirror scene, wow"
  # end

#   name = "Christian"
#
#   # We want to create a var called role. When name is Kane, make it Teacher's
#   # Assistant, when it is Wolf, make it Random Dude, when it is Hayley, make it Course producer,
#   # otherwise, make it student
#
#   role = case name
#   when "Kane" then "Teacher's Assistant"
#   when "Wolf" then "Random Dude"
#   when "Hayley" then "Course Producer"
#   when "Olivia" then "Student Experience Coordinator"
#   else
#     "Student"
#   end
#
# p role
#
#   puts true && true # => true
#   puts true && true # => false
#
#   puts true || false # => true
#   puts false || false # => false
#
#   puts 42 > 13 && 50 < 60 # => true
#   puts 42 < 13 || true # => true
#
#   puts |false # => true
#   puts |true # => false



###########################
####      DRINKING AGE
###
#################

age = 17

if age < 18
  puts "You are too young to drink"
elsif age > 18
  puts "Let's get ready to get wasted"
end

###########################
####      AIR CONDITIONING
###
#################

current_temp = 37

if current_temp > 30
  puts "Turn on the A/C Please"
elsif current_temp < 20
  puts "Fix the A/C now! It's hot!"
else
  puts "Fix the A/C whenever you have the chance... it's cool..."
end

  ###########################
  ####     SYDNEY SUBURBS
  ###
  #################

name = "Mt Druitt"

suburbs = case name
when "Mt Druitt" then "Ready to get shanked mate"
when "St Marys" then "Hope you can make it"
when "Doonside" then "Mate... Howd you get pass this?"
when "Blacktown" then "Safe haven to get punched"
  else
    "Centrelink can't save you mate"
  end
p suburbs
