# Project_1_Rails_App

Public URL link https://odioapp.herokuapp.com/


Technologies

Ruby on Rails
Purecss
Javascript
acts_as_votable gem
Heroku
Unsplash images
Atom text editor


Approach

User Stories

  I wanted an app that would bring together Audio Engineers and artists, in particular new Audio Engineers looking for experience and Artists that want recording experience and/or a free demo.

  Audio Engineer - I am a new Audio Engineer looking for more experience recording, as well as to build my portfolio of work. I want to be available for any artist to book me for a session.

  Artist - I am an Artist that would like more experience in a recording environment and/or need a demo. I need somewhere I can go that will have a listing of Engineers available near me.

  OR

  I am both an Engineer and artist. 


Planning

  Over the weekend, I drew out on paper my 3 CRUD systems (List of Engineers, Artists and a Bookings table). I then drew out the associations between the 3 CRUD models. The association between the 3 would be a has many through. So an engineer would have many artists through bookings. An Artist could have many audio engineers through bookings.

  I used Marvel for putting together some rough wireframes of the pages I needed.
  https://marvelapp.com/5cfaif4 (link to wireframes)

Project week

  I setup my 3 CRUD Tables. Then after we learnt User Authentication, I added in a User table and got that part working.

  There was now a new association that needed to be made between Users to Engineers/Artists. I saw this as a User has many Engineer or Artist. And an Engineer/Artist belongs to User. I updated the model with this.

  I added a user_id column to the Engineer/Artist table. I updated the CRUD systems for new Engineer/Artist to save the user_id when one is created. As well as when a booking is made by an artist, that the user_id is saved.

  The associations took a while for me to get working, I found the rails console really helpful in getting my head around this, and also using the seed file to test this out.

User profile page

  I wanted the user to be able to have a profile page that would show any artist or engineer profiles they have created. As well as being able to edit those from within the user profile. I also wanted to have any bookings listed there.

  I added artist/engineer profiles, as well as the edit/delete links for artist/engineer profiles. If the user clicks on their artist/engineer profile, they will then be able to see any recording sessions listed. Using conditional html, these are hidden from anyone else other than the user.

Artist/Engineer profiles pages

  These pages show images and bio. If current user is artist/engineer it will also show their bookings. They can edit and delete these bookings.

Bookings

  The bookings system is basic, there is a calendar and time to choose from. The next iteration of this app will have a full booking system with availability.

  The artist drop down will default to any artist profiles the currently logged in user has.

Additional features

  Upvoting on Engineers - I used the acts_as_votable gem and also implemented a ranking system based on upvotes. The engineers will move around based on the number of upvotes. If an engineer has equal number of upvotes, the most recent voted engineer will come ahead of the other.

  The next iteration of this app will include, location. As well as showing distance between artist/engineer.

  Notifications of bookings to engineers.

  Messaging between artists and engineers.


Unsolved problems

  The upvotes submitted timings.
  CSS - Materialize was too strict for what I wanted. I tried a few of the alternatives. I ended up using purecss, which gave the right amount of flexibility between using their classes as well as any other formatting that you need.
  The burger menu seems to freeze intermittently, locally as well as via Heroku.
  I struggled with formatting ruby forms.
  Implementing a proper booking system.
  I didn't even get to start working with GeoCoder.
