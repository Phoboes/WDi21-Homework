class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.text :band
      t.date :date
      t.text :ticket
      t.text :photos

      t.timestamps
    end
  end
end
