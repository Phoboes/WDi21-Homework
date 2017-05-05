def new
  end

  def create
    planet = Album.create( planet_params() )
    redirect_to "/albums"
  end

  def edit
    id = params["id"]
    @album = Album.find_by(id: id)
  end

  def update
    # I need to find the album
    album = Album.find_by(id: params["id"])
    # I need to update the planet using strong params
    album.update( planet_params )
    # I need to redirect to /albums/:id
    redirect_to "/albums/#{album.id}"
  end

  def destroy
    # Find the Album that I am interested in destroying
    album = Album.find_by(id: params["id"])
    # Somehow delete it
    album.destroy
    # Redirect back to the list of all planets
    redirect_to "/albums"
  end

  private
    def album_params
      # Strong Parameters || Whitelisting
      # A way to add params directly into the database by describing an appropriate structure
      params.require(:album).permit(:name, :artisit, :tracks, :release)
    end
