class CreateChefs < ActiveRecord::Migration[5.0]
  def change
    create_table :chefs do |t|
      t.text :name
      t.date :dob
      t.text :nationality
      t.text :image

      t.timestamps
    end
  end
end
