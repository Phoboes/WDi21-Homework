class User < ApplicationRecord
  has_secure_password

  has_many :artists
  has_many :engineers
# Added the below so I can access the bookings a user has through their engineer/artist profiles
  # has_many :bookings, :through => :engineers
  has_many :bookings, :through => :artists
end
