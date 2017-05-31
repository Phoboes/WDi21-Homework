# Extra credit exercise: write a program that prints out any input line that mentions both wilma and fred.

require 'pry'
# ruby boilerplate.rb data.txt
# ARGF will refer to data.txt
  #When we iterate through it, we are going line by line through that file.
ARGF.each do |line|
  if line =~ /[A-Z]/
    puts line
  end
end

# Gets all capitalized letters, needs to exclude capitals after the letter
