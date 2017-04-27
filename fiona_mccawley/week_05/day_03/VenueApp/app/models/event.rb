class Event < ApplicationRecord
  belongs_to :venue, optional: true
end
