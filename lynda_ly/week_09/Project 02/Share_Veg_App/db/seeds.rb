Message.destroy_all
User.destroy_all
u1 = User.create({
  name: "Vegodash",
  email: "vegodash@email.com",
  password: "chicken",
  password_confirmation: "chicken",
  image: "http://photos1.blogger.com/blogger/4670/2333/1600/DSC06290.jpg",
  mobile: "0494384534",
  bio: "I love the vegetables",
  likes: "veggies",
  dislikes: "chicken",
  allergies: "peanuts",
  building_number: "23",
  street: "Hickson Rd",
  city: "Sydney",
  state: "NSW",
  country: "Australia"
  })
u2 = User.create({
  name: "Pine Apple",
  email: "pineapple@email.com",
  password: "chicken",
  password_confirmation: "chicken",
  image: "https://tinkthetater.files.wordpress.com/2014/04/983747_10103214395018550_611641806_n.jpg?w=788",
  mobile: "0494384534",
  bio: "I love the pineapples",
  likes: "pineapples",
  dislikes: "carrots",
  allergies: "watermelon",
  building_number: "23",
  street: "Hickson Rd",
  city: "Sydney",
  state: "NSW",
  country: "Australia"
  })
u3 = User.create({
  name: "Mr Carrot",
  email: "carrot@email.com",
  password: "chicken",
  password_confirmation: "chicken",
  image: "http://biologii.net/world/images/carrot.jpg",
  mobile: "0494384534",
  bio: "I love the carrots",
  likes: "carrots",
  dislikes: "pineapples",
  allergies: "cheese",
  building_number: "45",
  street: "Kangaroo St",
  city: "Manly",
  state: "NSW",
  country: "Australia"
  })
u4 = User.create({
  name: "Jack Jeffress",
  email: "jack0@email.com",
  password: "chicken",
  password_confirmation: "chicken",
  image: "https://ga-core.s3.amazonaws.com/production/uploads/instructor/image/2283/thumb_BLACK_WHITE__2038_.jpg",
  mobile: "0494384534",
  bio: "I love the vegetables",
  likes: "veggies",
  dislikes: "yogurt",
  allergies: "dairy",
  building_number: "1",
  street: "Koala Lane",
  city: "Chatswood",
  state: "NSW",
  country: "Australia"
  })
u5 = User.create({
  name: "Kane Mott",
  email: "kane@email.com",
  password: "chicken",
  password_confirmation: "chicken",
  image: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAbXAAAAJGQ3Y2RmYmNjLTQzOTQtNDI1Yy1hMDAwLWEzM2E3NWFmMjRiZQ.jpg",
  mobile: "0494384534",
  bio: "I love the carrots",
  likes: "pineapples",
  dislikes: "mayonnaise",
  allergies: "eggs",
  building_number: "46",
  street: "Holmwood St",
  city: "Newtown",
  state: "NSW",
  country: "Australia"
  })
u6 = User.create({
  name: "Soffe",
  email: "soffe3@email.com",
  password: "chicken",
  password_confirmation: "chicken",
  image: "http://www.publicdomainpictures.net/pictures/20000/velka/vegetable-woman.jpg",
  mobile: "0494384534",
  bio: "I love the carrots",
  likes: "carrots",
  dislikes: "tofu",
  allergies: "soy",
  building_number: "74",
  street: "Garden St",
  city: "Alexandria",
  state: "NSW",
  country: "Australia"
  })
u7 = User.create({
  name: "Haynes",
  email: "haynes4@email.com",
  password: "chicken",
  password_confirmation: "chicken",
  image: "http://wall.dialectzone.org/wp-content/uploads/2015/06/Vegetable-Man.jpg",
  mobile: "0494384534",
  bio: "I love the vegetables",
  likes: "veggies",
  dislikes: "cereal",
  allergies: "wheat",
  building_number: "42",
  street: "Oxford St",
  city: "Darlinghurst",
  state: "NSW",
  country: "Australia"
  })
u8 = User.create({
  name: "Lambshine",
  email: "lambshine5@email.com",
  password: "chicken",
  password_confirmation: "chicken",
  image: "http://www.toysrus.com/graphics/tru_prod_images/Talking-Lamb-Chop-12-inch-Plush--pTRU1-13317342dt.jpg",
  mobile: "0494384534",
  bio: "I love the pineapples",
  likes: "pineapples",
  dislikes: "seafood",
  allergies: "shellfish",
  building_number: "2",
  street: "Crown St",
  city: "Woolloomooloo",
  state: "NSW",
  country: "Australia"
  })
u9 = User.create({
  name: "Cornelissen",
  email: "cornelissen6@email.com",
  password: "chicken",
  password_confirmation: "chicken",
  image: "http://vignette4.wikia.nocookie.net/poohadventures/images/0/0a/Cornelius_%28Babar%29.png/revision/latest?cb=20150119011730",
  mobile: "0494384534",
  bio: "I love the carrots",
  likes: "carrots",
  dislikes: "Marzipan",
  allergies: "cheese",
  building_number: "21",
  street: "Vicar St",
  city: "Coogee",
  state: "NSW",
  country: "Australia"
  })
u10 = User.create({
  name: "Lippingwell",
  email: "lippingwell7.com",
  password: "chicken",
  password_confirmation: "chicken",
  image: "https://c402277.ssl.cf1.rackcdn.com/photos/6520/images/portrait_overview/iStock_000016816803XLarge_mini.jpg?1394631384",
  mobile: "0494384534",
  bio: "I love the vegetables",
  likes: "veggies",
  dislikes: "liquorice",
  allergies: "peanuts",
  building_number: "23",
  street: "Lombard St",
  city: "Glebe",
  state: "NSW",
  country: "Australia"
  })
  puts "User Count: #{User.all.count }"

  Item.destroy_all
  i1 = Item.create({
    name: "Pineapple",
    description: "I'm tasty and in good condition",
    collected: "Item available now",
    image: "https://www.organicfacts.net/wp-content/uploads/2013/06/Pineapple.jpg",
    user_id: u2.id
    })
  i2 = Item.create({
    name: "Carrot",
    description: "I'm in poor condition and not very tasty",
    collected: "Item available now",
    image: "http://dingo.care2.com/pictures/greenliving/uploads/2016/05/carrots.jpg",
    user_id: u2.id
    })
  i3 = Item.create({
    name: "Apple",
    description: "I'm juicy and crunchy, yummmmmmy come and get me",
    collected: "Collected",
    image: "https://typewritermonkeys.files.wordpress.com/2015/04/apples.jpg",
    user_id: u2.id
    })
  i4 = Item.create({
    name: "Brussel Sprouts",
    description: "Whole bag of fresh Brussel Sprouts",
    collected: "Item available now",
    image: "https://bonnieplants.com/wp-content/uploads/brussels-sprouts.jpg",
    user_id: u4.id
    })
  i5 = Item.create({
    name: "Olives",
    description: "Home grown and made pickled olives",
    collected: "Item available now",
    image: "https://www.bbcgoodfood.com/sites/default/files/glossary/olives-cropped.jpg",
    user_id: u8.id
    })
  i6 = Item.create({
    name: "Mushrooms",
    description: "Straight out of my garden, heaps to share",
    collected: "Item available now",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Champignons_Agaricus.jpg",
    user_id: u8.id
    })
  i7 = Item.create({
    name: "Organic Cheese",
    description: "Cheese samples from a gift basket",
    collected: "Item available now",
    image: "http://www.organicwholefoods.org/contents/media/cheese-aged-cheddar-org-dairy-farm.jpg",
    user_id: u6.id
    })
  i8 = Item.create({
    name: "Carrot",
    description: "I'm in poor condition but would be great for soups.",
    collected: "Item available now",
    image: "http://images.parents.mdpcdn.com/sites/parents.com/files/styles/scale_1500_1500/public/images/550_101909647.jpg",
    user_id: u5.id
    })
  i9 = Item.create({
    name: "Potatoes",
    description: "Leftover uncooked potatoes from a 1kg bag",
    collected: "Item available now",
    image: "https://assets.precisionnutrition.com/wp-content/uploads/2013/01/potatoes.jpg",
    user_id: u9.id
    })
  i10 = Item.create({
    name: "Bread Rolls",
    description: "Overstocked for a party and heaps of unused bread rolls",
    collected: "Item available now",
    image: "http://www.talesfromthekitchenshed.com/sj-desford/uploads/2016/04/bread_rolls_pile600.jpg",
    user_id: u2.id
    })
  i11 = Item.create({
    name: "Butter",
    description: "Massive tub of butter",
    collected: "Item available now",
    image: "http://www.organicdairyfarmers.com.au/images/8bit-new/home-product-panel_up_02.png",
    user_id: u3.id
    })
  i12 = Item.create({
    name: "Spinach",
    description: "Bag of fresh spinach ideal for green juicing or salads",
    collected: "Item available now",
    image: "https://cdn.authoritynutrition.com/wp-content/uploads/2015/09/white-bowl-with-fresh-spinach-leaves.jpg",
    user_id: u9.id
    })
puts "Item Count: #{Item.all.count }"
Comment.destroy_all
c1 = Comment.create ({
      post: "Your pineapple changed my life",
      user_id: u1.id,
      item_id: i1.id
    })
c2 = Comment.create ({
      post: "Your carrots changed my life",
      user_id: u3.id,
      item_id: i2.id
    })
puts "Comment Count: #{Comment.all.count }"
