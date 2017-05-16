class OceansController < ApplicationController
  def index
    @all_oceans = Ocean.all
  end

  def show
    id = params["id"]
    @ocean = Ocean.find_by(id: id)
  end

  def new
  end

  def create
    ocean = Ocean.create( ocean_params() )
    redirect_to "/oceans"
  end

  def edit
    id = params["id"]
    @ocean = Ocean.find_by(id: id)
  end

  def update
    # I need to find the planet
    ocean = Ocean.find_by(id: params["id"])
    # I need to update the planet using strong params
    ocean.update( ocean_params )
    # I need to redirect to /planets/:id
    redirect_to "/ocean/#{ocean.id}"
  end

  def destroy
    # Find the Planet that I am interested in destroying
    ocean = Ocean.find_by(id: params["id"])
    # Somehow delete it
    ocean.destroy
    # Redirect back to the list of all planets
    redirect_to "/oceans"
  end

  private
    def ocean_params
      # Strong Parameters || Whitelisting
      # A way to add params directly into the database by describing an appropriate structure
      params.require(:ocean).permit(:name, :image, :area, :depth)
    end
end
