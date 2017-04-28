class Recipe < ApplicationRecord
  belongs_to :chef, optional: true
end
