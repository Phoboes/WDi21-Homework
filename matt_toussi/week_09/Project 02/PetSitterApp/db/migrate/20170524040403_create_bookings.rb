class CreateBookings < ActiveRecord::Migration[5.0]
  def change
    create_table :bookings do |t|
      t.datetime :start_time
      t.datetime :end_time
      t.integer :service_id
      t.integer :owner_id
      t.integer :sitter_id
      t.timestamps
    end
  end
end
