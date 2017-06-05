class AddLocationToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :building_number, :text
    add_column :users, :street, :text
    add_column :users, :city, :text
    add_column :users, :state, :text
    add_column :users, :country, :text
    add_column :users, :latitude, :text
    add_column :users, :longitude, :text
    add_column :users, :mobile, :integer
  end
end
