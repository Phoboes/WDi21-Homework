class Service < ApplicationRecord
  # has_many :users
  has_and_belongs_to_many :users
  #belongs_to :bookings
end
