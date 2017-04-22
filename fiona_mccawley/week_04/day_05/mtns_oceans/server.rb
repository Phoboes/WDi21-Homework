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
