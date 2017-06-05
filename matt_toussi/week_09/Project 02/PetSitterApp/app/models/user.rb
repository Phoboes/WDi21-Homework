class User < ApplicationRecord
  has_secure_password
  has_and_belongs_to_many :services
  has_many :pets
  has_many :bookings

  has_many :available_bookings, class_name: "Booking", foreign_key: "sitter_id"
  has_many :appointments, class_name: "Booking", foreign_key: "owner_id"

  geocoded_by :location
  after_validation :geocode
  ratyrate_rateable "avg"
    # You can rated based around your name
  ratyrate_rater
    # You can actually rate things

  def unrate( user_to_be_unrated )
    id_user_who_did_the_rating = self.id
    id_user_who_was_rated = user_to_be_unrated.id
    current_rating = Rate.find_by( rater_id: id_user_who_did_the_rating, rateable_id: id_user_who_was_rated )

    if current_rating
      current_rating.destroy
    end
  end

  def average_rating
    self.rates.average(:stars).to_f
  end
end
