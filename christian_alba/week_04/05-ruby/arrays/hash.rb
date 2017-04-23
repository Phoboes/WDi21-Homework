
#Creation of Hashes

empty_hash = {}

groucho = {
  first_name: "Groucho",
  last_name: "Marx"
}

p groucho[:first_name]
p groucho[:last_name]

groucho_two = {
  :first_name => "Groucho",
  :last_name => "Marx"
}

p groucho_two[:first_name]
p groucho_two[:last_name]

empty_hash = Hash.new
empty_hash[:something]
    # => nil

  another_empty_hash = Hash.new("THAT DOESN'T EXIST")
      # THAT DOESN'T EXIST will bes returned if you try and access
      # some key that doesn't exist
      # Setting a default values

  p another_empty_hash[:something]
      # => "THAT DOESN'T EXIST"


  camera = { brand: "Leica" }
  camera.default = "We don't have the piece of information"
  p camera[:model]
     # => "We don't have the piece of information"

  person = {
    :name => "Elke",
    :location => "Berkeley",
    "Skill in Mr. Squiggle" => 10
  }

  p person["Skill in Mr. Squiggle"]

  serge = {
    name: "Serge",
    nationality: "French"
  }
  p serge[:partner]
      # => nil

  serge[:partner] = "Jane (temporarily)"
      # Adding a key value pair

  p serge[:partner]
    # => "Jane (temporarily)"

  camera = {
    brand: "Leica",
    model: "M3",
    memory_card: "SD"
  }

  # I don't want the memory_card key value pair
  camera.delete(:memory_card)

  p camera

  blog_post = {
    id: 1013910,
    title: "My Awesome Blog Post",
    content: "A whole lot of gibberish (if I wrote it)",
    images: ["image1.jpg", "image2.jpg" ],
    date_created: "Today",
    author: {
      name: "Bill Murray"
    },
    something_useless: false
  }
  # Print out the ID, Title and content
  # Print out the author name
  # Delete the something_useless key and value pair
  # Set a default value to "Bills Awesome"
  # Loop thorugh all of the images
    # Print out each one of their names

  # I am Bill Murray, and i wrote a blog post called ________

  p blog_post[:id]
  p blog_post[:title]
  p blog_post[:content]

  p blog_post[:author][:name]

  author = blog_post[:author]
  p author[:name]

  blog_post.delete(:something_useless)

  blog_post[:comment_count] = 100

  blog_post.default = "Some Default Value"
  p blog_post[:this_doesnt_exist]

  blog_post[:images].each do |img|
    p img
  end

  blog_post[:images].each { |img| p img }

  images = blog_post[:images]
  images.each { |img| p img }

  name = blog_post[:author][:name]
  title = blog_post[:title]
  p "I am #{name}, and I wrote a blog post called #{title}"


  # Iteration


  camera = {
    brand: "Leica",
    model: "M3",
    year: 1956
  }

  p camera.methods().sort()
  p camera.keys
    # => [:brand, :model, :year]

  camera.keys.each.do |current_key|
    p "Current Key: #{current_key}"
  end


  p camera.values
    # => ["Leica", "M3", 1956]

  camera.values.each.do |val|
      val = "Leica"
      p "Current Value: #{val}"
  end

  p camera
  camera.each do |current_key, current_value|
      p current_key
      p current_value
  end

  explorer = {
    name: "Jacques Cousteau",
    occupation: "Explorer",
    goal: "Hello World",
    beanie: "Tomato"
  }

  # There is a new key value pair
  # Key: name. Value: ________

  explorer.each do |k, v|
    puts "There is a new key-value pair"
    puts "\t #{key}: #{value}"
  end
