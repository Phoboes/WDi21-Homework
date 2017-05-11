class CreateEngineers < ActiveRecord::Migration[5.0]
  def change
    create_table :engineers do |t|
      t.text :name
      t.text :bio
      t.float :latitude
      t.float :longitude
      t.text :image
      t.text :password
      t.text :password_confirmation

      t.timestamps
    end
  end
end
