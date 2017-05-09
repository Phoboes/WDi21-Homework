class RecipesController < ApplicationController
  def index
    @recipes = Recipe.all()
  end

  def show
    @recipe = Recipe.find_by(id: params["id"])
    # @recipe_chef = @recipe.chef.title
  end

  def new
    @recipe = Recipe.new
  end

  def create
    recipe = Recipe.create(recipe_params())
    redirect_to(recipe_path(recipe))
  end

  def edit
    @recipe = Recipe.find_by(id: params["id"])
  end

  def update
    recipe = Recipe.find_by(id: params["id"])
    recipe.update(recipe_params())

    redirect_to(recipe_path(recipe))
  end

  def destroy
    recipe = Recipe.find_by(id: params["id"])
    recipe.destroy()
    redirect_to(recipes_path())
  end

  private
  def recipe_params
    params.require(:recipe).permit(:title, :ingredients, :chef_id)
  end

end
