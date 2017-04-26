require 'pry'
class Robot

  attr_reader :instruction_count

  # Init - Establish the initial properties we want this class to hold.

  def initialize
    @instruction_count = 0
    @name = make_name

    # The Time method gives us a snapshot which we can save in a variable.
    @creation_date = Time.now
    @boot_date = Time.now
  end

  # Make a name - Generate a random name with 2 starting letters and 3 ending letters.

  def make_name
    @instruction_count += 1

    # Generate a range of letters from A-Z, convert it to an array and sample it twice at random.
    letter_pool = ("A".."Z").to_a.sample(2)
    # Now numbers.
    number_pool = (0..9).to_a.sample(3)
    # Merge my 2 arrays and then join then to make a valid string, like "EX456".
    letter_pool.concat( number_pool ).join
  end

  # Say the name.

  def name 
    @instruction_count += 1
    @name
  end

  # Reset - Generate a new name and a fresh timer

  def reset
    make_name
    @boot_date = Time.now
  end

  # Instructions - repeat the number of commands ever given to this class.

  # We can use attr_reader to read @instruction_count directly - making this method redundant..

  # def instruction_count
  #   @instruction_count
  # end

  # Timers - Give me the times since creation and last boot.

  def timers
    @instruction_count += 1
    p "Unit has been active for #{ Time.now - @creation_date } seconds. #{ Time.now - @boot_date } since last boot cycle."
  end

end

# Because we are using a class, we require the 'new' keyword.
p1 = Robot.new

p p1.name

# binding.pry