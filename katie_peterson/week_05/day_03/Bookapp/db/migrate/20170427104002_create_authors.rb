class CreateAuthors < ActiveRecord::Migration[5.0]
  def change
    create_table :authors do |t|
      t.text :author
      t.text :nationality
      t.date :dob
      t.text :genre
      t.text :image

      t.timestamps
    end
  end
end
