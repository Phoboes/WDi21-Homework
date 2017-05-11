class Artist < ApplicationRecord
  has_many :bookings
  has_many :engineers, :through => :bookings

  belongs_to :user, optional: true
end
