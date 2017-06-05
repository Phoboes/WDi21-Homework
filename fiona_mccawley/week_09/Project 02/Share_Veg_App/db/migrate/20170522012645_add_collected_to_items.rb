class AddCollectedToItems < ActiveRecord::Migration[5.0]
  def change
    add_column :items, :collected, :text
  end
end
