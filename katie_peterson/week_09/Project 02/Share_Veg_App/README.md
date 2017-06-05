# README

WasteNot: DO YOUR BIT FOR YOUR COMMUNITY AND HELP TACKLE FOOD WASTE

Developers: Fiona McCawley, Katie Peterson and Lynda Ly.

Wireframes:
  https://www.dropbox.com/sh/bh1m9m3pfy5yab9/AADkJOSibBlevGCPMHGzZX1Ka?dl=0

  Technologies:

  -HTML 5
  -CSS 3
  -Ruby Rails
  -jQuery
  -JavaScript


  Links:
  Heroku: https://sharevego-app.herokuapp.com/

  Gems:
  FriendlyId: https://github.com/norman/friendly_id
  Materialize: http://materializecss.com/
  Cloudinary: http://cloudinary.com/
  Geocoder: https://github.com/alexreisner/geocoder
  Acts as votable: https://github.com/ryanto/acts_as_votable

  APIs:
  Googlemaps


Features:
  -Comments
  -Distance between items
  -Location of user and item
  -Messaging
  -Notification when a message is received
  -Uploading item images
  -Search by produce and distance from user
  -Karma rating
  -Food available/not available
  -Upload images (using cloudinary)

User stories:

 -As a user I would like to post excess food items so I can reduce food waste.
 -As a user I would like to request a food item so I can eat it. The request is via messages.
 -As a user I would like to know the location of the food.
 -As a user I would like to remove the food items that have been "sold" from the food items view.
 -As a user I would like to show a history in my user profile of all the food items I have given away.
 -As a user I would like to comment on other people's user profiles so I can provide feedback.

Bugs:

  -friendly_id not working with upvote as the route changed.
  -cloudinary and Heroku
  -Heroku in general (migrations)
  -messaging - sender_id & recipient_id
  -geocoder - rendering

Where next:

  -As a group we are keen to offer it to the community.

How to get it set up locally:
  -Clone the repo from github to your computer.
  -cd into the repo
  -Open terminal
  -Run rails server
  -Go to localhost 3000
