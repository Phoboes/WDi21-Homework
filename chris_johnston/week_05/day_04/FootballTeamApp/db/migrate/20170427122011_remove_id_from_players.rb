class RemoveIdFromPlayers < ActiveRecord::Migration[5.0]
  def change
    remove_column :players, :team_id, :text
  end
end
