require "pry"
require "sinatra"
require "sinatra/reloader"
require "SQLite3"

# --------------------------------
# Static pages
# --------------------------------

# Root to this page.
get "/" do
  erb(:home) # Go get views/home.erb
end

get "/about" do
  erb(:about)
end

# --------------------------------
# CREATE - THE C IN CRUD
# --------------------------------

# Render the form - we are getting to this page
get '/animals/new' do
  erb(:animals_new)
end

# Handle a new animal - we are posting/submitting data in this step
# (the form on animals_new directs the data to this url, along with its method, in this case -- post.)
post "/animals" do
  species = params['species']
  desc = params['description']
  img = params['image']

  db = SQLite3::Database.new("database.db")
  db.execute(
    "INSERT INTO animals
    ( species, description, image )
    VALUES (
      '#{species}',
      '#{desc}',
      '#{img}'
    )"
  )
  db.close

  # Once we've made our model, go to the index page.
  redirect('/animals')
end

# --------------------------------

# --------------------------------
# EDIT/UPDATE - MODIFY DATA - THE U IN CRUD
# --------------------------------

#Render our edit form.
get "/animals/:id/edit" do

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  sql = "SELECT * FROM animals WHERE id == #{params[:id]}"
  @animal = db.execute( sql ).first
  db.close
  erb(:animals_edit)
end

#Handle posts to an existing model/animal
post "/animals/:id" do

  # UPDATE animals SET ( species, description, image ) WHERE id == params['id'];
  # Because we are editing an existing model, we want its id (unlike create)
  id = params['id']
  species = params['species']
  desc = params['description']
  img = params['image']

  db = SQLite3::Database.new("database.db")
  db.execute(
    "UPDATE animals SET
     species = '#{species}',
     description = '#{desc}',
     image = '#{img}'
     WHERE id == #{id}"
  )
  db.close

  redirect("/animals/#{id}")
end

# --------------------------------

# --------------------------------
# READ - LOOK AT DATA - THE R IN CRUD
# --------------------------------

# INDEX - SHOW ALL ANIMALS
get "/animals" do

  db = SQLite3::Database.new("database.db")
  # Convert our values to hashes rather than arrays for easier data manipulaton.
  db.results_as_hash = true
  @all_animals = db.execute( "SELECT * FROM animals" )
  db.close

  erb(:animals_index)
end

# SHOW - AN ANIMAL
# Note: We leave this until the end because :id is looking for a generic tag.
# ex: /animals/new would never be reached if this was before it.

get "/animals/:id" do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  sql = "SELECT * FROM animals WHERE id == #{params[:id]}"
  @animal = db.execute( sql ).first
  db.close

  erb(:animals_show)
end

# --------------------------------

# --------------------------------
# DELETE/DESTROY - REMOVE EXISTING DATA - THE D IN CRUD
# --------------------------------

get "/animals/:id/delete" do

# DELETE FROM animals WHERE id == params['id'];
  db = SQLite3::Database.new("database.db")
  sql = "DELETE FROM animals WHERE id == #{params['id']}"
  db.execute( sql )
  db.close

  # We have no page to render for delete -- Just go back to the index.
  redirect("/animals")

end

# --------------------------------
