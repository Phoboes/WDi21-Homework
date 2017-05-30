class Main
  def program
    regex_array = ['fred', '[Ff]red', '\w+\..+', '.*[A-Z].[a-z].+', '.*(\w)\1.*', 'fred.*wilma|wilma.*fred']
    counter = 1
    regex_array.each do |r|
      puts "Exercise number: #{counter}"
      RegexExercises.new(r)
      puts "\n"
      counter += 1
    end
  end
end

class RegexExercises
  def initialize(regex)
    find_match(regex)
  end
  
  def find_match(pattern)
    File.foreach("data.txt") do |line|
      if (line.strip =~ Regexp.new(pattern))
        puts "\t#{line}"
      end
    end
  end
end

start = Main.new
start.program