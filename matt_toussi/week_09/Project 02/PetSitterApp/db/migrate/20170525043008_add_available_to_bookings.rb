class AddAvailableToBookings < ActiveRecord::Migration[5.0]
  def change
    add_column :bookings, :available, :boolean, default: true
  end
end
