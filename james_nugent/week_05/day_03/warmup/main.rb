require 'pry'

class Robot

  attr_reader = :instruction_count
  # init - set any values I want kept from the start

  def initialize
    @created_time = Time.now
    @boot_time = Time.now
    @instruction_count = 0
    @name = make_name
    p "This robot was made"
  end

  # Say name

  def name
    @instruction_count += 1
    @name
  end

  # Create a name - 2 letters 3 numbers and join to a string

  def make_name
    @instruction_count += 1

    name_numbers = (0..9).to_a.sample(3)
    name_letters = ("A".."Z").to_a.sample(2)

    (name_letters + name_numbers).join

  end

  # reset - generate a new name

  def reset
    @instruction_count += 1
    @boot_time = Time.now
    @name = make_name
  end

  # instruction count - the number of instructions that have have ever been taken

  # timers - my creation time and my time since last reset

  def timers
    p "Unit #{@name} has been active for #{Time.now - @created_time} seconds, it has been #{Time.now - @boot_time} seconds since the last boot cycle"
  end


end

r1 = Robot.new

binding.pry
