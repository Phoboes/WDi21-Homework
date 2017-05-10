class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.datetime :appointment_time
      t.integer :duration
      t.integer :engineer_id
      t.integer :artist_id

      t.timestamps
    end
  end
end
