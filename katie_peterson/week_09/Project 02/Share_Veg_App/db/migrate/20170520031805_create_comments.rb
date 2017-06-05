class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.integer :user_id
      t.integer :item_id
      t.text :post

      t.timestamps
    end
  end
end
