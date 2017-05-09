class AddDetailsToPlayers < ActiveRecord::Migration[5.0]
  def change
    add_column :players, :team_id, :text
  end
end
