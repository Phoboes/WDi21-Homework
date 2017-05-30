# Make a program that prints each line of its input that contains a period (.), ignoring other lines of input. Try it on the small text file from the previous exercise: does it notice Mr. Slate?

require 'pry'
# ruby boilerplate.rb data.txt
# ARGF will refer to data.txt
  #When we iterate through it, we are going line by line through that file.
ARGF.each do |line|
  if line =~ /\.+/
    puts line
  end
end
