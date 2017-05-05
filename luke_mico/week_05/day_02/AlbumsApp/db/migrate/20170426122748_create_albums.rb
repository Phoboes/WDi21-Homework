class CreateAlbums < ActiveRecord::Migration[5.0]
  def change
    create_table :albums do |t|
      #t.datatype : field_name
      t.text :name
      t.text :artist
      t.integer :tracks
      t.integer :release
    end
  end
end
