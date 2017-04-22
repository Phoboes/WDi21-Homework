require "pry"
require "sinatra"
require "sinatra/reloader"
require "sqlite3"

# READ STEP - /bands
# CREATE STEP - /bands/new
# UPDATE STEP - /bands/:id/edit
# DELETE STEP - /bands/:id/delete

get "/" do
  erb(:home)
end

get "/about" do
  erb(:about)
end

get "/add" do
  erb(:add_details)
end

# ------------------------------------------------
# ENGINEERS
# ------------------------------------------------

get "/bands" do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  @all_bands = db.execute "SELECT * FROM bands"
  db.close
  erb(:band_index)
end

# input
get "/bands/new" do
  erb(:bands_new)
end

# submit part
post "/bands" do

  name = params["name"]
  genre = params["genre"]
  bio = params["bio"]
  img = params["image"]

  sql = "INSERT INTO bands (name, genre, bio, image) VALUES ('#{name}', '#{genre}', '#{bio}', '#{img}')"
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  db.execute( sql )
  db.close

  redirect("/bands")
end


get "/bands/:id" do
  id = params["id"]

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  sql = "SELECT * FROM bands WHERE id == #{id}"
  @band = db.execute(sql).first
  db.close

  erb(:bands_show)
end

get "/bands/:id/edit" do

  id = params["id"]

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  sql = "SELECT * FROM bands WHERE id == #{id}"
  @band = db.execute(sql).first
  db.close

  erb(:bands_edit)
end

post "/bands/:id" do

  id = params["id"]
  name = params["name"]
  genre = params["genre"]
  bio = params["bio"]
  image = params["image"]

  sql = "UPDATE bands SET name = '#{name}', genre = '#{genre}', bio = '#{bio}', image = '#{image}' WHERE id == #{id}"

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  db.execute(sql)
  db.close

  redirect("/bands/#{id}")

end

get "/bands/:id/delete" do
  id = params["id"]
  db = SQLite3::Database.new("database.db")
  sql = "DELETE FROM bands WHERE id == #{id}"
  db.execute(sql)
  db.close
  redirect("/bands")
end

# ------------------------------------------------
# ENGINEERS
# ------------------------------------------------

get "/engineers" do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  @all_engineers = db.execute "SELECT * FROM engineers"
  db.close
  erb(:engineer_index)
end

# input
get "/engineer/new" do
  erb(:engineer_new)
end

# submit part
post "/engineers" do

  name = params["name"]
  bio = params["bio"]
  gear = params["gear"]
  img = params["image"]

  sql = "INSERT INTO engineers (name, bio, gear, image) VALUES ('#{name}', '#{bio}', '#{gear}', '#{img}')"
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  db.execute( sql )
  db.close

  redirect("/engineers")
end

get "/engineers/:id" do
  id = params["id"]

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  sql = "SELECT * FROM engineers WHERE id == #{id}"
  @engineer = db.execute(sql).first
  db.close

  erb(:engineer_show)
end

get "/engineers/:id/edit" do

  id = params["id"]

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  sql = "SELECT * FROM engineers WHERE id == #{id}"
  @engineer = db.execute(sql).first
  db.close

  erb(:engineers_edit)
end

post "/engineers/:id" do

  id = params["id"]
  name = params["name"]
  bio = params["bio"]
  gear = params["gear"]
  image = params["image"]

  sql = "UPDATE engineers SET name = '#{name}', bio = '#{bio}', gear = '#{gear}', image = '#{image}' WHERE id == #{id}"

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  db.execute(sql)
  db.close

  redirect("/engineers/#{id}")

end

get "/engineers/:id/delete" do
  id = params["id"]
  db = SQLite3::Database.new("database.db")
  sql = "DELETE FROM engineers WHERE id == #{id}"
  db.execute(sql)
  db.close
  redirect("/engineers")
end
