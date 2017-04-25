
################
##      ARRAYS DAYS OF THE WEEK
################
#
# ###2. My calendar says the first day is Sunday...
#
# Remove Sunday from the last postion and move it to the first position. Use array methods.
# ###3. Create a new array of the days of the week:
#
# The first inner array should be the weekdays
# The second inner array should be the weekend days
###4. Remove either the weekdays or the weekends Your choice...

###5. Sort the remaining days alphabetically


days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

# .unshift removes the last item of the array
days_of_the_week = days_of_the_week.unshift( days_of_the_week )
days_of_the_week.pop

# PRINT OUT OCCURS HERE
p days_of_the_week

# FIRSTINNER ARRAY
weekdays = %w[ Monday, Tuesday, Wednesday, Thursday, Friday ]
#
weekeneds = %w [ Saturday, Sunday ]

split_days = [ weekdays, weekends ]

p split_days

split_days.flatten!


split_days.sort!

p split_days

#
