# Seeding the Database
  # Generating dummy data
  # Giving you a starting point (making sure you have user accounts etc.)
  # It is also a way to test models, associations etc.
  # To run this: ` rails db:seed `
#
# puts "Adding some dummy data..."

# Make sure that there are no duplicates

Album.destroy_all

# Create some records

joydivision = Album.create(name: "Closer", artist: "Joy Division", tracks: 9, release: 1980)
image: https://ksassets.timeincuk.net/wp/uploads/sites/55/2016/11/ElvisCostello-GetHappy-Cover.jpg

elviscostello = Album.create(name: "Get Happy!!", artist: "Elvis Costello", tracks: 9, release: 1980)
image: https://ksassets.timeincuk.net/wp/uploads/sites/55/2016/11/TheBeat-IJustCantStopIt-Cover.jpg

thebeat = Album.create(name: "I Just Cant Stop It", artist: "The Beat", tracks: 9, release: 1980)
image: https://ksassets.timeincuk.net/wp/uploads/sites/55/2016/11/TheBeat-IJustCantStopIt-Cover.jpg

blackuhuru = Album.create(name: "Sinsemilla", artist: "Black Uhuru", tracks: 12, release: 1980)
image: https://ksassets.timeincuk.net/wp/uploads/sites/55/2016/11/BlackUhuru-Sinsemilla-Cover.jpg

holgerczukey = Album.create(name: "Movies", artist: "Holger Czukay", tracks: 10, release: 1980)
image: https://ksassets.timeincuk.net/wp/uploads/sites/55/2016/11/HolgerCzukay-Movies-Cover.jpeg

talkingheads = Album.create(name: "Remain In Light", artist: "Talking Heads", tracks: 13, release: 1980)
image: https://ksassets.timeincuk.net/wp/uploads/sites/55/2015/05/2014Talkingheads_remaininlight1980__091214.jpg

echoandthebunnymen = Album.create(name: "Crocodiles", artist: "Echo And The Bunnymen", tracks: 11, release: 1980)
image: https://ksassets.timeincuk.net/wp/uploads/sites/55/2015/01/2014EchoAndTheBunnymen-Crocodiles.jpg

rycooder = Album.create(name: "Borderline", artist: "Ry Cooder", tracks: 9, release: 1980)
image: https://ksassets.timeincuk.net/wp/uploads/sites/55/2016/11/RyCooder-Borderline-Cover.jpg

david bowie = Album.create(name: "Scary Monsters And Super Creeps", artist: "David Bowie", tracks: 9, release: 1980)
image: https://ksassets.timeincuk.net/wp/uploads/sites/55/2013/10/381.DavidBowie_Scarymonsterscover_141013.jpg

dexysmidnightrunners = Album.create(name: "Searching For The Young Soul Rebels", artist: "Dexys Midnight Runners", tracks: 9, release: 1980)
image: https://ksassets.timeincuk.net/wp/uploads/sites/55/2015/01/2014DexysMidnightRunnersSearchingForTheYoungSoulRebels.jpg

puts "You have #{Album.all.count} albums in your record collection"
