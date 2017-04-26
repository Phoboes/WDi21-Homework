class GuitarsController < ApplicationController
  def index
    @all_guitars = Guitar.all
  end

  def show
  end

  def new
  end

  def edit
  end
end
