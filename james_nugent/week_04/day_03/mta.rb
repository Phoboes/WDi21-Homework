require 'pry'

$n_line = [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ]
$l_line = [ "8th", "6th", "Union Square", "3rd", "1st"]
$six_line = [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

def info

  # print "What line are you on? "
  $starting_line = "N"
  p "Starting line: #{$starting_line}"

  print "What station are you at? "
  $starting_station = gets().chomp()
  p "Starting station: #{$starting_station}"

  # print "What line do you want to be on? "
  $destination_line = "N"
  p "Destination line: #{$destination_line}"

  print "What station do you want to get to? "
  $destination_station = gets().chomp()
  p "Destination station: #{$destination_station}"

  directions()

end

def directions

  if $starting_line == "N" && $destination_line == "N"

    start = $n_line.index($starting_station)
    finish = $n_line.index($destination_station)

    if start < finish
      array = $n_line[start..finish]
      array.each { |n| print n + " "}

    elsif start > finish
      array = $n_line[finish..start]
      array.reverse_each { |n| print n + " "}
    end



    # nums.each { |n| print n }
    #
    # # nums.each do |n|
    # #   puts n
    # # end
    #
    # nums.reverse_each do |num|
    #   puts "Current numbers is #{num}"
    # end
    #
    # nums.reverse_each { |num| puts "Current numbers is #{num}" }

  else
    p "who knows where you are"
  end

end

info()

def forward

end

def backward

end

def forward_union

end

def backward_union

end

def union_forward

end

def union_backward

end



# p n_line.index("Union Square")

# n_line.each do |station|
#   p station
# end
