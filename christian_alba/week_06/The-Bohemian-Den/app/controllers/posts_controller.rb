class PostsController < ApplicationController
  def index
    @posts = Post.all
    #shows all post
  end

  def show
    @post = Post.find_by(id: params["id"])
  end

  def new
    @post = Post.new
  end

  def create
    post = Post.new( post_params )
    post.user = @current_user
    post.save
    redirect_to post_path(post)
    # Add Validation for form
    # validates :user, presence: true
  end

  def edit
    @post = Post.find_by(id: params["id"])
  end

  def update
    @post = Post.find_by(id: params["id"])
    @post.update(post_params)
    redirect_to '/posts'
  end

  def destroy
    post = Post.find_by(id: params["id"])
    post.destroy
    redirect_to '/posts'
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
