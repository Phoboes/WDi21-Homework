require "pry" #include the gem pry in this file

# def method_name(parameters, parameters)
#     Code to execute
# end


def hello
    puts "Hello World"
end

hello()
hello # Optional Parentheses

def specific_hello( name )
    puts "Hello #{name}"
end

specific_hello("Roget")
specific_hello "Geralt"
specific_hello()

def flexible_greeting(name = "World")
    puts "Greetings, #{name}"
end

flexible_greeting("Jane")
flexible_greeting "Serge"
flexible_greeting()
flexible_greeting

# binding.pry # debugger


# Methods
    # They are similar to JS functions
    # Parameters are mostly required
    # But you can also set default parameters to get around it
    # Implicit return
    # The last line

def add_two_numbers( x,y )
    puts "X + Y = #{x + y}"
    x + y
end

def greeting( name = "World" )
    # Return keywords are available
    # They are always the last line that is run
    # return "I don't feel like talking"
    "Hello #{name}"
end

p greeting ("Jane")
p greeting ()


def allowed( age = 0 )
    if age >= 18
        return true
    else
        return false
    end
end

allowed( 16 )
allowed( 25 )
