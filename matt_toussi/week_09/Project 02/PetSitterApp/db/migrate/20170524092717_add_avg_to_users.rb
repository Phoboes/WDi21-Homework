class AddAvgToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :avg, :integer, default: 3.0
  end
end
