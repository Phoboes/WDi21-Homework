class AddPlayerToPlayers < ActiveRecord::Migration[5.0]
  def change
    add_column :players, :team_id, :integer
  end
end
