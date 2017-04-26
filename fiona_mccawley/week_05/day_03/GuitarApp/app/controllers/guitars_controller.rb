class GuitarsController < ApplicationController
  def index
    @all_guitars = Guitar.all
  end

  def show
    id = params["id"]
    @guitar = Guitar.find_by(id: id)
  end

  def new
  end

  def create
    guitar = Guitar.create( guitar_params )
    redirect_to "/guitars"
  end

  def edit
    id = params["id"]
    @guitar = Guitar.find_by(id: id)
  end

  private
  def guitar_params
    params.require(:guitar).permit(:brand, :model, :color, :manufactured, :image)
  end
end
