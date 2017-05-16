User.destroy_all

u1 = User.create ({
firstname: "Chris",
lastname: "Johnston",
email: "johnstonchristo@gmail.com",
password: "chicken",
password_confirmation: "chicken"
  })

u2 = User.create ({
  firstname: "Ali",
  lastname: "Sanders",
  email: "christo.johnston@gmail.com",
  password: "password",
  password_confirmation: "password"
  })

u3 = User.create ({
  firstname: "Tom",
  lastname: "Richardson",
  email: "johnstonchristo@gmail.com",
  password: "tasmania",
  password_confirmation: "tasmania"

  })

p u1.password_digest
p u2.password_digest

Journal.destroy_all

j1 = Journal.create ({
  journalname: "Life",
  numberofentries: 1,
  per: "week",
  wordcount: 500,
  user_id: u1.id
})

j2 = Journal.create ({
  journalname: "WDi Bootcamp",
  numberofentries: 5,
  per: "week",
  wordcount: 500,
  user_id: u2.id
})

j2 = Journal.create ({
  journalname: "Football",
  numberofentries: 5,
  per: "week",
  wordcount: 500,
  user_id: u2.id
})

puts "User Count: #{(Journal.all.count)}"

entry1 = Entry.create ({
  entryname: "The beginning",
  entrytext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  journal_id: j2.id
})

entry2 = Entry.create ({
  entryname: "Day2",
  entrytext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  journal_id: j2.id
})

entry3 = Entry.create ({
  entryname:"Day1",
  entrytext: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  journal_id: j1.id
})

puts "Entry Count: #{(Entry.all.count)}"
