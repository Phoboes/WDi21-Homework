require "pry"

# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the total number of stops for the trip.



$line = {
  :N => ["Times Square", "34th", "28th N", "23rd N", "Union Square", "8th N"],
  :L => ["8th L", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th 6", "23rd 6", "Union Square", "Astor Place"]
}
$stop_array = []
$stop_array_two = []

#first part - forwards to union square
def trip_one_fwd(line_one, first_stop)
  # if $line[line_one].index(first_stop) < $line[line_one].index("Union Square")

      i = $line[line_one].index(first_stop)
      while i <= $line[line_one].index("Union Square")
        $stop_array.push($line[line_one][i])
        i += 1
      end
end
#first part - backwards to union Square
def trip_one_bwd(line_one, first_stop)
  # if $line[line_one].index(first_stop) > $line[line_one].index("Union Square")

    i = $line[line_one].index(first_stop)
    while i >= $line[line_one].index("Union Square")
      $stop_array.push($line[line_one][i])
      i -= 1
    end
end
#second part - forwards from union Square
def trip_two_fwd
  if $line[line_two].index("Union Square") < $line[line_two].index(second_stop)

      i = $line[line_two].index("Union Square")
      while i <= $line[line_two].index(second_stop)
        $stop_array_two.push($line[line_two][i])
        i += 1
      end
    end
end
#second part - backwards from union square
def trip_two_bwd
  if $line[line_two].index("Union Square") > $line[line_two].index(second_stop)

    i = $line[line_two].index("Union Square")
    while i >= $line[line_two].index(second_stop)
      $stop_array_two.push($line[line_two][i])
      i -= 1
    end
  end
end




def journey(line_one, first_stop, line_two, second_stop)

# if different lines
if $line[line_one] != $line[line_two]

    if $line[line_one].index(first_stop) < $line[line_one].index("Union Square")
      trip_one_fwd(line_one, first_stop)
    end

    if $line[line_one].index(first_stop) > $line[line_one].index("Union Square")
      trip_one_bwd(line_one, first_stop)
    end
end


#
# # forwards on same line
#   if $line[line_one].index(first_stop) < $line[line_one].index(second_stop)
#
#       i = $line[line_one].index(first_stop)
#       while i <= $line[line_one].index(second_stop)
#         $stop_array.push($line[line_one][i])
#         i += 1
#       end
#     end
# # backwards on same line
#    if $line[line_one].index(first_stop) > $line[line_one].index(second_stop)
#
#      i = $line[line_one].index(first_stop)
#      while i >= $line[line_one].index(second_stop)
#        $stop_array.push($line[line_one][i])
#        i -= 1
#      end
#    end
  #  number_of_stops = $stop_array.length
   stops = $stop_array.join(", " )
   stops_two = $stop_array_two.join(", ")

  p "Take the #{line_one} line, you will stop at the following stations: #{stops}. Change at Union Square, and get onto the #{line_two} line, and go through the follow stations #{stops_two}"

end
journey(:L, "1st", :N, "8th N")
















#
#
#
# // var travel = function( line, startStation, endingStation ){
# //   var returnArray = [];
#
# # //   // If the start looping through from the starting index, to the end.
# # //   // Store all stops along the way in an array.
#
# //   for( var i = line.indexOf( startStation ); i <= line.indexOf( endingStation ); i ++ ){
# //     returnArray.push( line[i] );
# //   }
# //   return returnArray;
# // };
#
#
# var travel = function( line, startStation, endingStation ){
#   var returnArray = [];
#   #
#   # // We know that the single line works now. Rather than re-use code, if we have an array where we know our start index is higher than our end (further down the array), just reverse the array.
#
#   if( line.indexOf( endingStation ) < line.indexOf( startStation ) ){
#     line = line.reverse();
#   }
#
#
#   for( var i = line.indexOf( startStation ); i <= line.indexOf( endingStation ); i ++ ){
#     returnArray.push( line[i] );
#   }
#   return returnArray;
# };
#
# var makeTrip = function( startingLine, startStation, endingLine, endingStation ){
#
#   if( startingLine !== endingLine ){
#
#     // We know we will be getting 2 arrays ending or starting at Union Square (the common point between our lines), we can use concat to join them.
#     return travel( startingLine, startStation, "Union Square" )
#           .concat( travel( endingLine, "Union Square", endingStation ) );
#   }
#
#   return travel( startingLine, startStation, endingStation );
#
# };






# binding.pry
