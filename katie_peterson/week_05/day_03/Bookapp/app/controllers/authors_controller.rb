class AuthorsController < ApplicationController
  def index
    @all_authors = Author.all
  end

  def show
    @author = Author.find( params['id'] )
  end

  def new
    @author = Author.new
  end

  def create
    author = Author.create( author_strong_params )
    redirect_to "/authors/#{author.id}"
  end

  def edit
    @author = Author.find( params['id'] )
  end

  def update
    @author = Author.find( params['id'] )
    @author.update ( author_strong_params() )
    redirect_to "/authors/#{@author.id}"
  end

  def destroy
    @author = Author.find( params['id'] )
    @author.destroy
    redirect_to "/authors"
  end

private
  def author_strong_params
      params.require(:author).permit( :author, :nationality, :dob, :image, :genre )
  end
end
