# Make a program that prints each line of its input that mentions fred. (It shouldn’t do anything for other lines of input.) Does it match if your input string is Fred, frederick, or Alfred? Make a small text file with a few lines mentioning "fred flintstone" and his friends, then use that file as input to this program and the ones later in this section.

require 'pry'
# ruby boilerplate.rb data.txt
# ARGF will refer to data.txt
  #When we iterate through it, we are going line by line through that file.
ARGF.each do |line|
  if line =~ /fred/
    puts line
  end
end
