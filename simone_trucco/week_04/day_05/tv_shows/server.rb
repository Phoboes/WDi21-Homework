require "pry"
require "sinatra"
require "sinatra/reloader"
require "sqlite3"

# Include the gems
# Work on the static pages
  # Home pages
  # About pages
# Create the database itself
# Add a table into the database
  # sqlite3 database.db < _______.sql
  # Make a migration
# Insert a few records into that table
  # Seeding the database (adding dummy data)
# READ STEP - /animals
# CREATE STEP - /animals/new
# UPDATE STEP - /animals/:id/edit
# DELETE STEP - /animals/:id/delete

get "/" do
  erb(:home) # Go get views/home.erb
end

get "/about" do
  erb(:about)
end

get "/tv_shows" do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  @tv_shows = db.execute "SELECT * FROM tv_show"
    # => [{}, {}, {}]
  db.close

  erb(:tv_shows_index)
  # Read Step of CRUD
    # Show all tv_shows
end

get "/tv_shows/new" do
  erb(:tv_shows_new)
end

post "/tv_shows" do
  img = params["poster"]
  desc = params["plot"]
  species = params["title"]

  # INSERT INTO tv_shows (title, poster, plot) VALUES ('title', 'poster', 'plot')
  sql = "INSERT INTO tv_shows (title, poster, plot) VALUES ('#{title}', '#{poster}', '#{plot}')"

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  db.execute( sql )
  db.close

  redirect("/tv_shows")
end

get "/tv_shows/:id" do
  # Show Page (Profile Page) of a specific animal
  # Connect to the database
  # Ask for the results as a hash
  # Execute some SQL
  # Save the record in an instance variable
  # Present it

  id = params["id"]

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  sql = "SELECT * FROM tv_shows WHERE id == #{id}"
  @tv_show = db.execute(sql).first
  db.close

  erb :tv_shows_show
end

get "/tv_shows/:id/edit" do
  id = params["id"]

  # Find the animal
    # So we can show prefilled inputs
    # So we can use the ID

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  sql = "SELECT * FROM tv_shows WHERE id == #{id}"
  @tv_show = db.execute(sql).first
  db.close

  erb(:tv_shows_edit)
end

post "/tv_shows/:id" do
  id = params["id"]
  title = params["t"]
  plot = params["p"]
  poster = params["pt"]

  # UPDATE animals SET species = '___', description = '___', image = '___' WHERE id == ___
  sql = "UPDATE tv_shows SET species = '#{title}', plot = '#{plot}', poster = '#{poster}' WHERE id == #{id}"

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  db.execute( sql )
  db.close

  redirect("/tv_shows/#{id}")
end

get "/tv_shows/:id/delete" do
    # we need to get the ID out of the URL
  id = params["id"]

    # we need to connect to the database
  db = SQLite3::Database.new("database.db")

    # we need to delete the animal with a certain ID
      # DELETE FROM animals WHERE id == ___
  sql = "DELETE FROM tv_shows WHERE id == #{id}"
  db.execute( sql )
      # we need to close the datatbase connection (as soon as I connected the database)
  db.close

    # redirect back to the list of all animals
  redirect("/tv_shows")
end
