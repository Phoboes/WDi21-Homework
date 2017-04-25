require "pry"

a = ["Anil", "Erik", "Jonathan"]

# How would you return the string "Erik"?

a[1]

# How would you add your name to the array?

a.push( "My name" )


h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

# How would you return the string "One"?
h[1]
# How would you return the string "Two"?
h[:two]
# How would you return the number 2?
h["two"]
# How would you add {3 => "Three"} to the hash?
h[3] = "Three"
# How would you add {:four => 4} to the hash?
h[:four] = "Four"


is = {true => "It's true!", false => "It's false"}

# What is the return value of is[2 + 2 == 4]?
# True
# What is the return value of is["Erik" == "Jonathan"]?
# False
# What is the return value of is[9 > 10]?
# False
# What is the return value of is[0]?
# None
# What is the return value of is["Erik"]?
# None

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
  users["Jonathan"][:twitter]
# How would you add the number 7 to Erik's favorite numbers?
  users["Erick"][:favourite_numbers].push(7)
# How would you add yourself to the users hash?
  users["Christian"] = { twitter: "Nope", favourite_numbers: [4, 7, 47, 49, 77]}
# How would you return the array of Erik's favorite numbers?
  users["Erick"][:favourite_numbers]
# How would you return the smallest of Erik's favorite numbers?
  users["Erick"][:favourite_numbers].min
# How would you return an array of Anil's favorite numbers that are also even?
  users["Anil"][:favourite_numbers].select{ | num | num.even? }
# How would you return an array of the favorite numbers common to all users?
  arr = []

users.key.each { |key, value | arr.push users [key][:favourite_numbers] }

# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
  arr.flatten.uniq.sort

  #binding.pry
