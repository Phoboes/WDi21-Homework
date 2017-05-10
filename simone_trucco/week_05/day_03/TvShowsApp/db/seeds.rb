puts "Adding info in Tv shows, here..."

# make sure there are no duplicates
Serie.destroy_all

# create records in db
buffy = Serie.create(title: "Buffy the Vampire Slayer", year: 1997, seasons: 7, plot: "A young woman is forced to fulfill her destiny of fighting vampires and demons with the help of her friends all the while struggling to live a normal teenage life of heart break and drama.")
wife = Serie.create(title: "The Good Wife", year: 2009, seasons: 7, plot: "Alicia has been a good wife to her husband, a former state's attorney. After a very humiliating sex and corruption scandal, he is behind bars. She must now provide for her family and returns to work as a litigator in a law firm.")
schitt = Serie.create(title: "Schitt's Creek", year: 2015, seasons: 4, plot: "When rich video store magnate Johnny Rose, and his family suddenly find themselves broke, they are forced to leave their pampered lives to regroup in Schitt's Creek.")
will = Serie.create(title: "Will & Grace", year: 1998, seasons: 9, plot: "Will and Grace live together in an apartment in New York. He's a gay lawyer, she's a straight interior designer.")
city = Serie.create(title: "Sex and the City", year: 1998, seasons: 6, plot: "Four female New Yorkers gossip about their sex lives (or lack thereof) and find new ways to deal with being a woman in the '90s.")
