require 'pry'

# ###1. Create an array of the days of the week
#
# Create a variable named days_of_the_week as an array of the following:
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday
# Sunday

days_of_the_week  = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ]


# ###2. My calendar says the first day is Sunday...
  # Remove Sunday from the last postion and move it to the first position. Use array methods.

days_of_the_week.pop() # remove from end
days_of_the_week.insert(0, "Sunday") # insert the "sunday" in the positon of index 0
p days_of_the_week


# ###3. Create a new array of the days of the week:
  # The first inner array should be the weekdays
  # The second inner array should be the weekend days


weekdays = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" ]
weekends = [ "Saturday", "Sunday" ]
join_week = [ weekdays, weekends ]

p join_week

# ###4. Remove either the weekdays or the weekends Your choice...
join_week.delete_at(1) # delete_at index 1
p join_week

# ###5. Sort the remaining days alphabetically
join_week.flatten! # flatten would return a new array
join_week.sort!
p join_week
