Team.destroy_all

fulham = Team.create({
  name: "Fulham",
  country: "England",
  competition: "Championship"
  })

norwich = Team.create({
name: "Norwich",
country: "England",
competition: "Championship"
  })

  puts "Team Count: #{Team.all.count}"

  Player.destroy_all

  p1 = Player.create({
    name: "James Jones",
    nationality: "Australian",
    position: "Goal Keeper",
    team_id: 15
  })

  p2 = Player.create({
    name: "Chris Johnston",
    nationality: "Greek",
    position: "Striker",
    team_id: 15
  })

  p3 = Player.create({
    name: "Adam Smith",
    nationality: "Irish",
    position: "Winger",
    team_id: 16
    })

  p4 = Player.create({
    name: "Gus Brown",
    nationality: "Swedish",
    position: "Midfielder",
    team_id: 16
      })

  puts "Player Count: #{Player.all.count}"
