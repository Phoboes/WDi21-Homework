# Trip Calculator
#
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour

###example###
# 600km trip
  #i'm travelling at 60 km per hour
    #how many hours will it take
     #600km / 60km per hour  = trip time 10 hours
# cost
  #600 km
    #fuel is $1.32 per litre
    #my car uses 8 litres for every 100km = 12.5 km for every litre of fuel
  #(distance / kms per litre) * price per litre = total cost
    # (600 / 12.5 ) * 1.32 = $63.36
p "-----------------------------------------------------"
def trip_calculator
  p "What distance in miles are you travelling?"
  distance = gets.to_f

  p "What will be your average speed per hour in miles?"
  speed = gets.to_f

  p "How many miles per gallon does your car get?"
  miles_per_gallon = gets.to_f

  p "What is the current price of fuel per gallon?"
  price_per_gallon = gets.to_f

  trip_time = (distance / speed).round(2)
  trip_cost = ((distance / miles_per_gallon) * price_per_gallon).round(2)

  p "Your trip will take #{trip_time} hours and will cost $#{trip_cost}"

end
trip_calculator()
p "-----------------------------------------------------"
