Venue.destroy_all

brixton = Venue.create(name: "Brixton Academy", location: "Brixton", capacity: 5000)
bowery = Venue.create(name: "Bowery Ballroom", location: "NYC, United States", capacity: 3000)
corner = Venue.create(name: "The Corner Hotel", location: "Melbourne, VIC", capacity: 1200)

Event.destroy_all

event1 = Event.create ({
  band: "The Horrors",
  date: "2009/09/09",
  ticket: "$60",
  photos: "http://www.streetandstage.com/wp-content/uploads/2009/09/the_horrors_bowery_ballroom.jpg",
  venue_id: bowery.id
  })

event2 = Event.create ({
  band: "My Vitriol",
  date: "2001/10/18",
  ticket: "$50",
  photos: "https://upload.wikimedia.org/wikipedia/commons/5/50/MyVitriol.Nov24.KOKO.jpg",
  venue_id: brixton.id
  })
