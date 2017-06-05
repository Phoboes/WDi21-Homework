require("geocoder")
class UsersController < ApplicationController
  before_action :check_if_logged_out, only: [:new, :create]
  before_action :check_if_logged_in, only: [:edit, :update]

  def index
    @userall = User.all

    # We might be getting a parameter called search - params[:search]
    # If there is no params[:search]
      # Pass all users to the view

    # If there is a params[:search] value
      # Use the .where method to search through the User table to find all users
        # where the location field contains params[:search]







    if params[:search].present?
  #   # Users.where("location like ?", "%"+params[:location]+"%")
  #   # Users.find(:all, :location => ["location like ?", "%"+params[:location]+"%"])
  # # @users should be all users where the name field matches params["name"]

    # @users = User.where(location: "Sydney")
    # @users = User.where(location: params[:search])
    # @users = User.where("location LIKE ?", params[:search])
    # @users = User.where("location ILIKE ?", params[:search])
    # @address = Geocoder.search(params[:search])
    # if @address.length == 0
    #   flash[:error] = "Please enter a valid address"
    #   render :home
    # end
    #
    # @centerLat = @address[0].geometry["location"]["lat"]
    # @centerLng = @address[0].geometry["location"]["lng"]
    #
    # @fromLat = @centerLat - 0.01
    # @toLat = @centerLat + 0.01
    #
    # @fromLng = @centerLng - 0.01
    # @toLng = @centerLng + 0.01
    #
    # #@toLat = @address[0].geometry["viewport"]["northeast"]["lat"]
    # #@fromLat = @address[0].geometry["viewport"]["southwest"]["lat"]
    #
    # #@fromLng = @address[0].geometry["viewport"]["southwest"]["lng"]
    # #@toLng = @address[0].geometry["viewport"]["northeast"]["lng"]
    #
    # #@users = User.where("cast(latitude as float) > ?",
    # #@fromLat)
    # # raise
    # @users = User.where("cast(latitude as float) > ? and cast(latitude as float) < ? and cast(longitude as float) > ? and cast(longitude as float) < ?",
    # @fromLat, @toLat, @fromLng, @toLng)
  #   # User.where(location_field, "<%#{params[:location]}%>")

    @users = User.near( params[:search], 20, units: :km )

    else
    @users = User.all
    end

  end

  def show
    @user = User.find_by(id: params["id"])
  end

  def new
    @user = User.new
  end

  def create
    @address = Geocoder.search(params[ "user" ][ "location" ])
    if @address.length == 0
      flash[:error] = "Please enter a valid address"
      render :new
    end

    @user = User.new( user_params )
    @user.longitude = @address[0].geometry["location"]["lng"]
    @user.latitude = @address[0].geometry["location"]["lat"]
    cloudinary = Cloudinary::Uploader.upload( params[ "user" ][ "image" ] )
    @user.image = cloudinary["url"]
    if @user.save
      session[:user_id] = @user.id
      redirect_to user_path( @user )
    else
      render :new
    end
  end


  def edit
    @user = User.find_by(id: params['id'])
  end

  def update

    user = User.find_by( id: params['id'] )
    user.update( user_params )

    if params[:user][:image]
      cloudinary = Cloudinary::Uploader.upload( params[ "user" ][ "image" ] )
      user.image = cloudinary["url"]
    end
    user.save
    redirect_to "/users/#{user.id}"
  end

  def destroy
      user = User.find_by(id: params["id"])
      user.destroy
      redirect_to "/"
  end

  # UPVOTE AND DOWNVOTE RATING
  def upvote
  @user = User.find(params[:id])
  @user.upvote_by @current_user
  redirect_to :back
  end

  def downvote
  @user = User.find(params[:id])
  @user.downvote_by @current_user
  redirect_to :back
  end

private

  def user_params
     params.require(:user).permit(:name, :password, :password_confirmation, :email, :location, :image, :service_ids => [])
     # raty_rate
    #  ratyrate_rater
  end

  def check_if_logged_out
    if @current_user
      flash[:error] = "You are already logged in!"
      redirect_to "/users"
    end

  end

  def check_if_logged_in
    unless @current_user
      flash[:error] = "You need to be logged in!"
      redirect_to "/login"
    end
  end

end
