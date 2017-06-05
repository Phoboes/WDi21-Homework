class CreateRatings < ActiveRecord::Migration[5.0]
  def change
    create_table :ratings do |t|
      t.integer :average
      t.integer :rater_id
      t.integer :rated_id

      t.timestamps
    end
  end
end
