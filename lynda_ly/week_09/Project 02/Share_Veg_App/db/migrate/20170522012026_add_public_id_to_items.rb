class AddPublicIdToItems < ActiveRecord::Migration[5.0]
  def change
    add_column :items, :public_id, :text 
  end
end
