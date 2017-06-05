class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.text :name
      t.text :email
      t.text :image
      t.text :bio
      t.text :likes
      t.text :dislikes
      t.text :allergies
      t.string :slug
      t.text :password_digest
      t.text :public_id

      def self.up
    add_column :users, :cached_votes_total, :integer, :default => 0
    add_column :users, :cached_votes_score, :integer, :default => 0
    add_column :users, :cached_votes_up, :integer, :default => 0
    add_column :users, :cached_votes_down, :integer, :default => 0
    add_column :users, :cached_weighted_score, :integer, :default => 0
    add_column :users, :cached_weighted_total, :integer, :default => 0
    add_column :users, :cached_weighted_average, :float, :default => 0.0
    add_index  :users, :cached_votes_total
    add_index  :users, :cached_votes_score
    add_index  :users, :cached_votes_up
    add_index  :users, :cached_votes_down
    add_index  :users, :cached_weighted_score
    add_index  :users, :cached_weighted_total
    add_index  :users, :cached_weighted_average

    # Uncomment this line to force caching of existing votes
    # Post.find_each(&:update_cached_votes)
  end

  def self.down
    remove_column :users, :cached_votes_total
    remove_column :users, :cached_votes_score
    remove_column :users, :cached_votes_up
    remove_column :users, :cached_votes_down
    remove_column :users, :cached_weighted_score
    remove_column :users, :cached_weighted_total
    remove_column :users, :cached_weighted_average
  end

      t.timestamps
    end
    add_index :users, :slug, unique: true
  end
end
