class CreateSeries < ActiveRecord::Migration[5.0]
  def change
    create_table :series do |t|
      t.text :title
      t.integer :year
      t.text :image
      t.integer :seasons
      t.text :plot
    end
  end
end
