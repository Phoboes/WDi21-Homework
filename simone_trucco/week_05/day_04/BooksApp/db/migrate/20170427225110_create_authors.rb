class CreateAuthors < ActiveRecord::Migration[5.0]
  def change
    create_table :authors do |t|
      t.text :name
      t.text :nationality
      t.date :dob

      t.timestamps
    end
  end
end
