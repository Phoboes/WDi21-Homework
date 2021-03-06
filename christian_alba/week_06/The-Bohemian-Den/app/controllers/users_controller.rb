class UsersController < ApplicationController
  # before_action :fetch_user, only: [:new, :create]
  before_action :fetch_user

  def index
    @users = User.all
  end

  def show
    @user = User.find_by(id: params["id"])
  end

  def new

    if @current_user
      redirect_to user_path(:id)
    end

    @user = User.new

  end

  def create
    @user = User.new( user_params() )
    if @user.save
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    else
      render :new
    end
  end

  def edit
    @user = User.find_by(id: params["id"])
  end
              # UPDATE USERS
  def update
    user = User.find_by(id: params["id"])
    if @user.update( user_params() )
      redirect_to @user
    else
      render 'edit'
    end
  end

  def destroy
    user = User.find_by(id: params["id"])
    user.destroy

    redirect_to '/users'
  end

  private
    def user_params
      params.require(:user).permit(:name, :email, :password, :password_confirmation)
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
