class AddAuthorIdToBooks < ActiveRecord::Migration[5.0]
  def change
    add_column :books, :author_id, :integer
  end
end
