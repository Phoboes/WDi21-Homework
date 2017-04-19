# require "pry"

# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the total number of stops for the trip.



$line = {
  :N => ["Times Square", "34th", "28th N", "23rd N", "Union Square", "8th N"],
  :L => ["8th L", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th 6", "23rd 6", "Union Square", "Astor Place"]
}
$stop_array = [] #array to capture first part of 2 line journey
$stop_array_two = [] #array to capture second part of 2 line journey
$stop_array_three = [] #array to capture same line journey



#first part - forwards to union square
def trip_one_fwd( line_one, first_stop )
      i = $line[line_one].index( first_stop ) + 1
      while i <= $line[line_one].index( "Union Square" )
        $stop_array.push($line[line_one][i])
        i += 1
      end
end
#first part - backwards to union Square
def trip_one_bwd( line_one, first_stop )
    i = $line[line_one].index( first_stop ) - 1
    while i >= $line[line_one].index( "Union Square" )
      $stop_array.push($line[line_one][i])
      i -= 1
    end
end
#second part - forwards from union Square
def trip_two_fwd( line_two, second_stop )
      i = $line[line_two].index( "Union Square" ) + 1
      while i <= $line[line_two].index( second_stop )
        $stop_array_two.push($line[line_two][i])
        i += 1
      end
end
#second part - backwards from union square
def trip_two_bwd( line_two, second_stop )
    i = $line[line_two].index("Union Square") - 1
    while i >= $line[line_two].index( second_stop )
      $stop_array_two.push($line[line_two][i])
      i -= 1
    end
end


def plan_trip( line_one, first_stop, line_two, second_stop )

# if different lines
if $line[line_one] != $line[line_two]
    #first part if fwds
    if $line[line_one].index( first_stop ) < $line[line_one].index( "Union Square" )
      trip_one_fwd( line_one, first_stop )
    end
    #first part if bwds
    if $line[line_one].index( first_stop ) > $line[line_one].index( "Union Square" )
      trip_one_bwd(line_one, first_stop)
    end
    #second part if fwds
    if $line[line_two].index( "Union Square" ) < $line[line_two].index( second_stop )
      trip_two_fwd(line_two, second_stop)
    end
    #second part if bwds
    if $line[line_two].index( "Union Square" ) > $line[line_two].index( second_stop )
      trip_two_bwd(line_two, second_stop)
    end

    stops = $stop_array.join(", " )
    stops_two = $stop_array_two.join(", ")
    total_stops = $stop_array.length + $stop_array_two.length

   p "Take the #{line_one} line, you will stop at the following stations: #{stops}."
   p "Change at Union Square"
   p "Get onto the #{line_two} line, and go through the follow stations #{stops_two}"
   p "Total stops: #{total_stops}"

end

#if the same line
if $line[line_one] == $line[line_two]
# forwards on same line
  if $line[line_one].index( first_stop ) < $line[line_one].index( second_stop )

      i = $line[line_one].index( first_stop ) + 1
      while i <= $line[line_one].index( second_stop )
        $stop_array_three.push($line[line_one][i])
        i += 1
      end

    end
# backwards on same line
   if $line[line_one].index( first_stop ) > $line[line_one].index( second_stop )

     i = $line[line_one].index( first_stop ) - 1
     while i >= $line[line_one].index( second_stop )
       $stop_array_three.push($line[line_one][i])
       i -= 1
     end

   end

   stops_three = $stop_array_three.join(", ")
   total_stops = $stop_array_three.length

   p "Take the #{line_one}, line you will go through the following stations #{stops_three}."
   p "Total stops: #{total_stops}"
 end
end
plan_trip("6", "Grand Central", :L, "8th L")





# binding.pry
