class Item < ApplicationRecord
  belongs_to :user, optional: true
  has_many :comments

  def self.search(search)
    # self.user.latitude
    # self.user.longitude

    self.where("name ILIKE ?", "%#{search}%")
    # self.where("distance ILIKE ?", "%#{distance}%")

  end

end
