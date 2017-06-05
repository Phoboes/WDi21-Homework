# ----------------------------------------------------------------------------------------------
### Recursive solution -- The calculate_collection method calls itself until the last thing in the collection is 1.

# ----------------------------------------------------------------------------------------------

# class Collatz

#   def initialize num
#     @collection = [ num ]
#     calculate_collection( num )
#   end

#   def calculate_collection num
#     if @collection.last > 1
#       @collection.push( num.even? ? (num / 2) : ( (num * 3) + 1 ) )
#       calculate_collection( @collection.last )
#     end
#   end

#   def answer
#     puts "The total steps were: #{ @collection.join(', ') }"
#     puts "The program ran #{ @collection.length } times."
#   end

# end


# Sidenote:

# If the ternary in calculate_collection is confusing to read, look at it like an if/else statement

    # next_index = num.even? ? ( num / 2 ) : ( num * 3 + 1 )

# is exactly the same as:

    # if num.even?
    #   next_index = num / 2
    # else
    #   next_index = (num * 3) + 1
    # end

# Ternaries can be used both to return a value, like so:

  # return condition ? true : false

# And to define variables depending on a condition -- like above.

# ----------------------------------------------------------------------------------------------

# I've called answer as soon as the class is created, an alternative would be to throw the answer method in initialize (at the end)

# Collatz.new(19).answer
# ----------------------------------------------------------------------------------------------


# ----------------------------------------------------------------------------------------------
#  While loop version -- Identical to the above, except it relies on a loop instead of recursion; though they do effectively the same thing.
# ----------------------------------------------------------------------------------------------

# class Collatz

#   def initialize num
#     @collection = [num]
#     generate_collection
#   end

#   def generate_collection
#     while @collection.last > 1
#       if @collection.last.even?
#         next_step = @collection.last / 2
#       else
#         next_step = @collection.last * 3 + 1
#       end
#       @collection.push( next_step )
#     end
#   end

#   def answer
#     puts "The total steps were: #{ @collection.join(', ') }"
#     puts "The program ran #{ @collection.length } times."
#   end

# end


# Collatz.new(19).answer


# ----------------------------------------------------------------------------------------------
arr = [ 19 ]

# This is a really gross line of code -- But you *can* do this in one line if you want. This method relies on an *until* loop, though there are quite a few different methods you could use.
arr.push( arr.last.even? ? (arr.last/2) : ( (arr.last * 3) + 1) ) until arr.last == 1

puts "Ran #{ arr.length } times, the process was:\n > #{ arr.join(', ') }"