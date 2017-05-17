Author.destroy_all

rowling = Author.create ({
  author: "J K Rowling",
  nationality: "British",
  dob: "1965/07/31",
  genre: "magical",
  image: "http://shortyawards.com.s3.amazonaws.com/entries/8th/jk_2617100b.jpg"
  })

  tolkien = Author.create ({
    author: "J R R Tolkien",
    nationality: "British",
    dob: "1892/01/03",
    genre: "fantasy",
    image: "http://likeateam.com/wp-content/uploads/2014/04/J.R.R.Tolkien-quotes-294x300.jpg"
    })

    coelho = Author.create ({
      author: "Paulo Coelho",
      nationality: "Brazilian",
      dob: "1947/08/24",
      genre: "adventure",
      image: "https://queleerblog.files.wordpress.com/2015/02/paulo-coelho.jpg"
      })

    puts "Author Count: #{Author.all.count}"

  Book.destroy_all

  b1 = Book.create ({
      title: "Harry Potter and The Philosopher's Stone ",
      published: '1997',
      genre: 'fantasy',
      language: 'English',
      image: 'https://vignette3.wikia.nocookie.net/harrypotter/images/7/7b/Harry01english.jpg/revision/latest/scale-to-width-down/333?cb=20150208225304',
      })

    b2 = Book.create ({
        title: "The Hobbit ",
        published: '1937',
        genre: 'fantasy',
        language: 'English',
        image: 'https://www.tolkiensociety.org/wp-content/uploads/2016/07/original-hobbit-dust-jacket-840x459.jpg',
          })

      b3 = Book.create ({
        title: "The Alchemist ",
        published: '1988',
        genre: 'adventure',
        language: 'Portuguese',
        image: 'https://dublinlibrary.files.wordpress.com/2016/09/the-alchemist.jpg',
                })

    puts "Book Count: #{Book.all.count}"
