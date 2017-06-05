class Booking < ApplicationRecord
  belongs_to :owner, class_name: 'User', foreign_key: 'owner_id', optional: true
  belongs_to :sitter, class_name: 'User', foreign_key: 'sitter_id'
  belongs_to :service
end
