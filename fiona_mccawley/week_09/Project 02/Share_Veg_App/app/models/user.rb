class User < ApplicationRecord
  # MESSAGES
  validates :name, :email,  presence: true
  validates :email, uniqueness: true
  # validates :password, length: { minimum: 4 }
  validates :name, length: { minimum: 2 }

  has_many :conversations, :foreign_key => :sender_id, dependent: :destroy
  has_many :messages, through: :conversations, dependent: :destroy

  # UPVOTE
  belongs_to :user
  acts_as_votable

  # extend FriendlyId
  # friendly_id :name, use: :slugged

  has_secure_password

  has_many :items
  has_many :comments
  has_many :comments, :through => :items

  geocoded_by :model_address
  after_validation :geocode

  def model_address
    "#{ self.building_number } #{ self.street } #{self.city} #{ self.state } #{ self.country }"
  end

end
