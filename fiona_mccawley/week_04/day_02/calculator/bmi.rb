require "pry"
# BMI Calculator
#
# Calculate the body mass index (BMI) for an individual, given their height and weight

#inputs will be height and weight
#method will be formula to work out BMI

# divide your weight in kilograms (kg) by your height in metres (m)
# then divide the answer by your height again to get your BMI
p "-----------------------------------------------------"
def bmi_calc
  p "How tall are you in metres?"
  height = gets.to_f

  p "What is your current weight in kgs?"
  weight = gets.to_f

  result = (( weight / height ) / height).round(2)
  p "Your BMI is #{result}kg/m2"

  case
  when result < 18.5
    p "You are underweight"
  when result >= 18.5 && result <= 24.9
    p "You are normal weight"
  when result >= 25 && result <= 29.9
    p "You are overweight"
  else
    p "You are obese"
  end
end
bmi_calc()
p "-----------------------------------------------------"

# Underweight: BMI is less than 18.5
# Normal weight: BMI is 18.5 to 24.9
# Overweight: BMI is 25 to 29.9
# Obese: BMI is 30 or more




# binding.pry
