class PlayersController < ApplicationController
  def index
    @all_players = Player.all
  end

  def show
    @player = Player.find_by(id: params["id"])
end
end
