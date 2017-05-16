class Booking < ApplicationRecord
  belongs_to :engineer
  belongs_to :artist
  # Added the below association so the user has access to view the bookings through their user profile
  belongs_to :user
end
