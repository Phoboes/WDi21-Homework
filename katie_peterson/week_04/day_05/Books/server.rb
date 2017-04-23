require "pry"
require "sinatra"
require "sinatra/reloader"
require "SQLite3"

get "/" do
  erb (:home)
end

get "/about" do
  erb (:about)
end

get "/books" do
  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  @all_books = db.execute "SELECT * FROM books"
  db.close

  erb(:books_index)
end

get "/books/new" do
  erb(:books_new)
end

post "/books" do
  img = params["image"]
  desc = params["description"]
  title = params["title"]

  sql = "INSERT INTO books (title, image, description) VALUES ('#{title}', '#{img}', '#{desc}')"

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  db.execute ( sql )
  db.close

  redirect("/books")

  "There was a post request"
end


get "/books/:id" do

  id = params["id"]

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true

  sql = "SELECT * FROM books WHERE id == #{id}"
  @books = db.execute(sql).first
  db.close

  erb :books_show
end

get "/books/:id/edit" do
  id = params["id"]

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  sql = "SELECT * FROM books WHERE id == #{id}"
  @books = db.execute(sql).first
  db.close

  erb(:books_edit)
end

post "/books/:id" do
  id = params["id"]
  title = params["t"]
  description = params["d"]
  image = params["i"]

  sql = "UPDATE books SET species = '#{title}', description = '#{description}', image = '#{image}' WHERE id == #{id}"

  db = SQLite3::Database.new("database.db")
  db.results_as_hash = true
  db.execute sql
  db.close

  redirect("/books/#{id}")
end


get "/books/:id/delete" do

  id = params["id"]

  db = SQLite3::Database.new("database.db")
  sql = "DELETE FROM books WHERE id == #{id}"
  db.execute sql
  db.close
  redirect("/books")
end
