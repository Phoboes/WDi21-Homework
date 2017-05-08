class CreateOceans < ActiveRecord::Migration[5.0]
  def change
    create_table :oceans do |t|
      t.text :name
      t.text :image
      t.integer :area
      t.integer :depth
      t.timestamps
    end
  end
end
