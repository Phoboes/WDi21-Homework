class RemoveUserNameFromUser < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :username, :text
  end
end
