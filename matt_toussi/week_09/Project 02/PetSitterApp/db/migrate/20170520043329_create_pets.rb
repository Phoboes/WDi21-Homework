class CreatePets < ActiveRecord::Migration[5.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.integer :age
      t.string :type
      t.string :gender
      t.text :description
      t.text :image
      t.integer :user_id

      t.timestamps
    end
  end
end
