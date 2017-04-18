# Mortgage Calculator
#
# Calculate the monthly required payment given the other
# variables as input (look up the necessary variables)
#
require "pry"

def monthly_repayment

p "How much do you want to borrow?"
principal = gets.to_i

#need to work out monthly interest rate (r)
#(rate / 12) / 100 = r

p "What is the interest rate?"
interest_rate = gets.to_f #convert to float, otherwise getting 0 as result
rate = (interest_rate / 12) / 100 # converts it to the monthly interest rate in decimals

# number of payments = I need length of loan from user
#then a function to calculate number of payments
# how many years * 12 = n

p "What is the loan period?"
num_of_years = gets.to_i
num_of_payments = num_of_years * 12

#function to calculate monthly repayements
 #monthly repayment  = p * ((r(1+r)**n) / ((1 + r)**n) - 1)
# p = principal
# r = rate
# n = num_of_payments

#I'm going to break down the equation to make it easier to
#caclulate and know whats going on

#top half (r(1+r)**n)

#bottom half (1 + r)**n - 1


#(top half / bottom half) * p

  top_half = (( 1 + rate ) ** num_of_payments) * rate
  bottom_half = (( 1 + rate ) ** num_of_payments) - 1
  result = (top_half / bottom_half) * principal
  p "Your monthly repayment on a $#{principal}, at #{interest_rate}% over #{num_of_years} years is $#{result}"


binding.pry
