class RatingsController < ApplicationController
  def index
    @rating = Rating.new
  end

  def show
    @rating_all = Ratings.all
  end

  def edit
    @rating.destroy
    redirect_to rating_path
  end

  def create
    # params[:id] - use this to find the user that is being rate
    # @current_user - use this to determine who is doing the rating
    # params[:rating] - use this when you create the rating

    # Find the user using params[:id]
    @user = User.find_by(id: params["id"])
                        # /users/:id/rate
    # Create a new rating
    @user.rate( params[:rating].to_f, @current_user )
    redirect_to "/users/#{@user.id}"
      # Use the found user
    # @user = User.name
      # Pass in params[:rating]
    # params[:rating]
      # Pass in current_user

    # Redirect to the users show page
      # redirect_to "/users/#{@user.id}"

    # @user = User.find_by(id: params[:id])
    # raise "hell"
    # @user_rates = User.rates
    # @user_rated = USER_TO_BE_RATED.rate( NUMBER_OF_STARS_OUT_OF_5, USER_TO_DO_THE_RATING )
    # @user.rate( , @current_user )
  end

end





# In the users show ( /users/45, /users/13 - /users/:id )
# Create an instance variable called average rating
  # Find the relevant user
  # Call .average_rating
# Print out the average rating on the users show page
