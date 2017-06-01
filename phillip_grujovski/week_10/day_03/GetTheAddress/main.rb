class Rgxr
  def initialize
    str1 = "5 Fake Street, Sydney, NSW 2000, Australia"
    str2 = "56 York Street, Sydney, NSW 2000, Australia"
    str3 = "30 York St, Sydney NSW 2000, Australia"

    regex = /(?<street_num>\d+) (?<street_name>\w+) (?<street_type>\w+),* (?<suburb>\w+),* (?<state>\w+),* (?<postcode>\d+), (?<country>\w+)/

    match1 = str1.match(regex)
    puts match1
    match2 = str2.match(regex)
    puts match2
    match3 = str3.match(regex)
    puts match3

  end
end

Rgxr.new

# Using the data above, figure out how you can get the following pieces of data:

#     street_num
#     street_name
#     street_type (Street, St., avenue, Ave. etc.)
#     suburb
#     state
#     postcode
#     country
