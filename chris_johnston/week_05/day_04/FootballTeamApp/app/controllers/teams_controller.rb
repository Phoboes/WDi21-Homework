class TeamsController < ApplicationController

def index
@all_teams = Team.all
end

def show
  @team = Team.find_by(id:params["id"])
end

def new
  @team= Team.new
end

def create
  player = Team.create(player_strong_params())
  redirect_to "teams/#{@team.id}"
end
end
