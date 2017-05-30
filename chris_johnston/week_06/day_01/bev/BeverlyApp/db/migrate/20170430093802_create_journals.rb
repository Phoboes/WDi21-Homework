class CreateJournals < ActiveRecord::Migration[5.0]
  def change
    create_table :journals do |t|
      t.text :journalname
      t.integer :numberofentries
      t.text :per
      t.integer :wordcount
      t.integer :user_id

      t.timestamps
    end
  end
end
