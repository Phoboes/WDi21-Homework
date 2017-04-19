# MTA in Ruby
# // Apply your knowledge of Javascript to solve a real world problem.
# // Get really good at array manipulation.
# // Activity
# //
# // Create a program that models a simple subway system.
# //
# // The program takes the line and stop that a user is getting on at and
# // the line and stop that user is getting off at and prints the journey
# // and the total number of stops for the trip in the console:
# //
# // planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
# //
# // // console.log() shows output similar to this:
# // // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# // // "Change at Union Square."
# // // "Your journey continues through the following stops: 23rd, 28th, 33rd."
# // // "7 stops in total."
# // There are 3 subway lines:
# // The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# // The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# // The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# // All 3 subway lines intersect at Union Square, but there are no other intersection points.
# // (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line,
# // so you'll have to differentiate this when you name your stops in the arrays.)
# // Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

NLine = [
  "Times Square",
  "34th",
  "28th N",  #//differentiate from the one on the 6 line
  "23rd N", #//differentiate this stop from the one one on the 6 line
  "Union Square",
  "8th N" #//added N to differentiate from the L line
];
LLine= [
  "8th L", #//add L to differentiate from the N line
  "6th",
  "Union Square",
  "3rd",
  "1st"
];
sixLine = [
  "Grand Central",
  "33rd",
  "28th 6", #//added 6 to differentiate from the one on the NLine
  "23rd 6", #//added 6 to differentiate from the one on the NLine
  "Union Square",
  "Astor Place"
];



#train forwards function on one line



# def train_forwards (line_one, stop1, line_two, stop2)
#     first_stop = line_one.index(stop1)
#     second_stop = line_two.index(stop2)
#
#     msg_forward = ""
#     array_forward = []
#
#     i = first_stop + 1
#     while i <= second_stop -1
#       array_forward.push(i)
#       msg_forward += line_one[i] + " ,"
#       i += 1
#   end
#   p "You must travel through the following stops: #{msg_forward} and #{stop2}"
#   p "#{array_forward}"
# end
#
# #train backwards
#
# def train_backwards (line_one, stop1, line_two, stop2)
#     first_stop = line_one.index(stop1)
#     second_stop = line_two.index(stop2)
#
#     msg_backward = ""
#     array_backward = []
#
#     i = first_stop - 1
#     while i >= second_stop + 1
#       array_backward.push(i)
#       msg_backward += line_one[i] + " ,"
#       i -= 1
#   end
#   p "You must travel through the following stops: #{msg_backward} and #{stop2}"
#   p "#{array_backward}"
# end
#
# #full train journey
#
# def train_journey (line_one, stop1, line_two, stop2)
#   first_stop = line_one.index(stop1)
#   second_stop = line_two.index(stop2)
#
#   if first_stop < second_stop
#     train_forwards(line_one, stop1, line_two, stop2)
#   elsif first_stop > second_stop
#     train_backwards(line_one, stop1, line_two, stop2)
#   else
#     p "you are not going anywhere"
#  end
# end
# # train_journey(NLine, "8th N", NLine, "Times Square") #backwards
# # train_journey(NLine, "Times Square", NLine, "8th N") #forwards
#
# #Different lines
#   #first half
#
# #forwards
# def train_forwards_one (line_one, stop1)
#     first_stop = line_one.index(stop1)
#     second_stop = line_one.index("Union Square")
#
#     msg_forward_one = ""
#     array_forward_one = []
#
#     i = first_stop + 1
#     while i <= second_stop -1
#       array_forward_one.push(i)
#       msg_forward_one += line_one[i] + " ,"
#       i += 1
#   end
#   p "You must travel through the following stops: #{msg_forward_one} and Union Square"
#   p "#{array_forward_one}"
# end
#
# def train_backwards_one (line_one, stop1)
#     first_stop = line_one.index(stop1)
#     second_stop = line_one.index("Union Square")
#
#     msg_backward_one = ""
#     array_backward_one = []
#
#     i = first_stop - 1
#     while i >= second_stop + 1
#       array_backward_one.push(i)
#       msg_backward_one += line_one[i] + " ,"
#       i -= 1
#   end
#   p "You must travel through the following stops: #{msg_backward_one} and Union Square"
#   p "#{array_backward_one}"
# end
#
# def train_journey_one (line_one, stop1)
#   first_stop = line_one.index(stop1)
#   second_stop = line_one.index("Union Square")
#
#   if first_stop < second_stop
#     train_forwards_one(line_one, stop1)
#   elsif first_stop > second_stop
#     train_backwards_one(line_one, stop1)
#   else
#     p "you are not going anywhere"
#  end
# end
#
# #second half
#
# #forwards
# def train_forwards_two (line_two, stop2)
#     first_stop = line_two.index("Union Square")
#     second_stop = line_two.index(stop2)
#
#     msg_forward_two = ""
#     array_forward_two = []
#
#     i = first_stop + 1
#     while i <= second_stop -1
#       array_forward_two.push(i)
#       msg_forward_two += line_one[i] + " ,"
#       i += 1
#   end
#   p "You must travel through the following stops: #{msg_forward_two} and #{stop2}"
#   p "#{array_forward_two}"
# end
#
# def train_backwards_two (line_two, stop2)
#     first_stop = line_two.index("Union Square")
#     second_stop = line_two.index(stop2)
#
#     msg_backward_two = ""
#     array_backward_two = []
#
#     i = first_stop - 1
#     while i >= second_stop + 1
#       array_backward_two.push(i)
#       msg_backward_two += line_one[i] + " ,"
#       i -= 1
#   end
#   p "You must travel through the following stops: #{msg_backward_two} and Union Square"
#   p "#{array_backward_two}"
# end
#
# def train_journey_two (line_two, stop2)
#   first_stop = line_two.index("Union Square")
#   second_stop = line_two.index(stop2)
#
#   if first_stop < second_stop
#     train_forwards_two(line_two, stop2)
#   elsif first_stop > second_stop
#     train_backwards_two(line_two, stop2)
#   else
#     p "you are not going anywhere"
#  end
# end
#
# def plan_journey (line_one, stop1, line_two, stop2)
#   if line_one == line_two
#     train_journey(line_one, stop1, line_two, stop2)
#   else
#     train_journey_one(line_one, stop1)
#     p "Change at Union Square"
#     train_journey_two(line_two, stop2)
#   end
# end
#
# plan_journey( NLine, "Grand Central", NLine, "8th N")
