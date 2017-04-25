require "pry"
#can use :N and :L but cannot use symbols for numbers, it has to be a string.

# #creates a line hash

lines = {

	"N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
	"L" => ["8th", "6th", "Union Square", "3rd", "1st"],
	"6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

travel_route = []
#start_line
start_line = "N"
#start_station
start_station = "Time Square"
#second_line
second_line = "L"
#final_station
final_station = "Grand Central"

def start_station_index
	lines [start_line].index start_station
end

def final_station_index
	lines [second_line].index final_station_index
end

def union_square (lines)
	lines[line].index "Union Square"
end

def go_forward()
# returnArray = [ ]
#
# i = line.indexOf (start_station); line.indexOf (end_station);

start_station_index = train_line[start_line].index start_station
union_square_first_line =

#straight trip going up an array

# index of this and index of that
# don't use user input initially
# focus on moving forward N 0 -> 6

line.each() do |start_line, start_station, end_station|
	puts "You are on line: #{line}, getting on at: #{start_station}, getting off at: #{end_station}."
end

# def travel ( line, start_station, end_station)
# 	return_array = []
#
#
#   # puts # puts "You are on line: #{line}, getting on at: #{start_station}, getting off at: #{end_station}."
# end
#
travel("N", "Times Square", "8th")


def go_forward

  line

end

# different method backwards 6 -> 0

def go_backwards

end



# #create a method that returns the data
# def lines
#   returns all lines
# end
#
# #find intersection
#
# #a symbol can't be a number

#Title: MTA Lab

# Activity:
#
# Students should create a program that models a simple subway system.
#
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the total number of stops for the trip.
#
# There are 3 subway lines:
#
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points.
# For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.
# We should be able to say:
#
# plan_trip( :n, "Times Square", :l, "Grand Central" )
# # Or something along those lines
# Hints:
#
# Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
# Scope works in a different way in Ruby, so variables that you define outside won't be accessible in a method. Maybe think about using a function to return data. Or perhaps research other types of variables
# A symbol can't just be a number!
# Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
# Make subway lines keys in a hash, while the values are an array of all the stops on each line.
# The key to the lab is to find the intersection of the lines at Union Square.
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
