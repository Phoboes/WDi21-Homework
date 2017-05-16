class CreateVenues < ActiveRecord::Migration[5.0]
  def change
    create_table :venues do |t|
      t.text :name
      t.text :location
      t.integer :capacity
      t.text :image
    end
  end
end
