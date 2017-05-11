class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.text :name
      t.text :email
      t.text :location
      t.float :latitude
      t.float :longitude
      t.text :user_type
      t.text :password_digest

      t.timestamps
    end
  end
end
