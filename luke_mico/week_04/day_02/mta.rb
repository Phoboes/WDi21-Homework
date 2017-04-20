require "pry"

# MTA
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off then prints the total number of stops for the trip.

# There are 3 subway lines:

# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

# All 3 subway lines intersect at Union Square, but there are no other intersection points.
# For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.
# We should be able to say:

# plan_trip( :n, "Times Square", :l, "Grand Central" )
# # Or something along those lines

# Hints:
# * Get the program to work for a single line before trying to tackle multiple lines.
# * Diagram how the program works by drawing out the subway lines and their stops and intersection.
# * The subway lines are keys in a hash, while the values are an array of all the stops on each line.
# * The key to the lab is the intersection of the lines at Union Square. Google “ruby array intersect.”
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated).

#PSEUDOCODE - Ruby

# I want to ask user a series of questions, which they need to input a response

# Questions
# I want to ask question - user to be able to input Line they get ON at
p "What line do you want to get on at?"
line_on = gets.chomp

# I want to ask question - user to be able to input Stop they get ON at.
p "What stop do you want to get on at?"
stop_on = gets.chomp

# I want to ask question - user to be able to input Line they get OFF at
p "What line do you want to get off at?"
line_off = gets.chomp

# I want to ask question - user to be able to input Stop they get OFF at.
p "What stop do you want to get off at?"
stop_off = gets.chomp

subway = {
	"N" => ["Times Square", "34th St", "28th St", "23rd St", "Union Square", "8th Ave"],
	"L" => ["8th Ave", "6th Ave", "Union Square", "3rd Ave", "1st Ave"],
	"6" => ["Grand Central", "33rd St", "28th St", "23rd St", "Union Square", "Astor Place"]
}

# I want to find out the number of stops for 1st journey, then 2nd journey after changing at Union Square.
if train [line_on].index(stop_on) == nil

# find number of stops in journey number 1

# find number of stops in journey number 2


# find number of total stops

# total_journey = first_journey + second_journey

end

p first_stop
p first_journey
p intersection_stop_1

p last_stop
p second_journey
p intersection_stop_2

# I then want to print the total number of stops for the trip.
p "The total number of stops is #{ total_journey }"



binding.pry
