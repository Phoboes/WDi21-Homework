class AddUserIdToEngineers < ActiveRecord::Migration[5.0]
  def change
    add_column :engineers, :user_id, :integer
  end
end
