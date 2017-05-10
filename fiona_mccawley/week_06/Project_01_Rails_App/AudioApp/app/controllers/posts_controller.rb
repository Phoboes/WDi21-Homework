class PostsController < ApplicationController
  before_action :authorise, only: [:new, :create]

  def show
    @post = Post.find_by( id: params['id'] )
  end

  def index
    @all_posts = Post.all
  end

  def new
    @post = Post.new
  end

  def create
    post = Post.new(post_params)
    post.user = @current_user
    post.save
    redirect_to post_path(post)
  end

  def edit
  end

  private

  def post_params
    params.require(:post).permit(:heading, :content)
  end

  def authorise
    unless @current_user
      flash[:error] = "You need to be logged in for that"
      redirect_to "/login"
    end
  end

end
