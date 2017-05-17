class ChefsController < ApplicationController
  def index
    @chefs = Chef.all()
  end

  def show
    @chef = Chef.find_by(id: params["id"])
    @recipes = @chef.recipes
  end

  def new
    @chef = Chef.new()
  end

  def create
    chef = Chef.create(chef_params())
    redirect_to(chef_path(chef))
  end

  def edit
    @chef = Chef.find_by(id: params["id"])
  end

  def update
    chef = Chef.find_by(id: params["id"])
    chef.update(chef_params())
    redirect_to(chef_path(chef))
  end

  def destroy
    chef = Chef.find_by(id: params["id"])
    chef.destroy
    redirect_to(chefs_path())
  end

  private
  def chef_params
    params.require(:chef).permit(:name, :nationality, :dob, :image)
  end
end
