class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.integer :user_id
      t.text :name
      t.text :description
      t.text :image

      t.timestamps
    end
  end
end
