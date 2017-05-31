 # Modify the previous program to allow Fred to match as well. Does it match now if your input string is Fred, frederick, or Alfred? (Add lines with these names to the text file.)

require 'pry'
# ruby boilerplate.rb data.txt
# ARGF will refer to data.txt
  #When we iterate through it, we are going line by line through that file.
ARGF.each do |line|
  if line =~ /[Ff]red/
    puts line
  end
end
