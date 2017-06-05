class UsersController < ApplicationController

  before_action :check_if_logged_out, only: [:new, :create]
  before_action :check_if_logged_in, only: [:edit, :update]

  def index
    @all_users = User.all
    # @user = User.find_by(id: params['id'])
  end

  def show
    @user = User.find(params[:id])
    @conversations = Conversation.all
  end

  def new
    @user = User.new
  end

  def create

    @user = User.new( user_params )
    if params[:user][:link]
      cloudinary = Cloudinary::Uploader.upload( params[ "user" ][ "link" ] )
      @user.image = cloudinary["url"]
    end
    if @user.save
      session[:user_id] = @user.id
      redirect_to edit_user_path( @user )
    else
      render :new # Show them the Sign Up form again
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    user = User.find(params[:id])
    user.update ( user_params )
    if params[:user][:link]
      cloudinary = Cloudinary::Uploader.upload( params[ "user" ][ "link" ] )
      user.image = cloudinary["url"]
    end
    user.save


    redirect_to "/users/#{user.id}"
  end

  def destroy
    user = User.find_by( id: params['id'] )
    user.destroy
    redirect_to "/users"
  end

  def upvote
    @user = User.find_by(id: params['id'])
    @user.upvote_by @current_user
    redirect_to :back
    end

    def notifications
      # @all_conversations = Conversation.all
      # get me every convo that i'm in, then get every message within those convo's
      @messages = Message.where(read: false)
      # @messages = Message.all

      respond_to do |f|
        f.html {}
        f.json { render json: @messages }
      end
    end

   private

      def user_params

        params.require(:user).permit(:name, :email, :password, :password_confirmation, :bio, :allergies, :likes, :dislikes, :mobile, :building_number, :street, :city, :state, :country, :slug)
      end

      def check_if_logged_out
        if @current_user
          flash[:error] = "You are already logged in"
          redirect_to "/users"
        end
      end

      def check_if_logged_in
        unless @current_user
          flash[:error] = "You need to be logged in for that"
          redirect_to "/login"
        end
  end

end
