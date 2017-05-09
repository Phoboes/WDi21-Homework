class VenuesController < ApplicationController
  def index
    @all_venues = Venue.all
  end

  def show
    id = params["id"]
    @venue = Venue.find_by(id: id)
  end

  def new

  end

  def create
    venue = Venue.create (  venue_params )
    redirect_to "/venues"
  end

  def edit
    id = params["id"]
    @venue = Venue.find_by(id: id)
  end

  def update
    venue = Venue.find_by(id: params["id"])
    venue.update(venue_params)
    redirect_to "/venues/#{venue.id}"
  end

  def destroy
    venue = Venue.find_by(id: params["id"])
    venue.destroy
    redirect_to "/venues"
  end

  private
  def venue_params
    params.require(:venue).permit(:name, :location, :capacity, :image)

  end
end
