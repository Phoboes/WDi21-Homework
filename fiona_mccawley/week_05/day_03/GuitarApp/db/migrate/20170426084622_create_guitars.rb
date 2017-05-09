class CreateGuitars < ActiveRecord::Migration[5.0]
  def change
    create_table :guitars do |t|
      t.text :model
      t.text :brand
      t.text :color
      t.integer :manufactured
      t.text :image
    end
  end
end
