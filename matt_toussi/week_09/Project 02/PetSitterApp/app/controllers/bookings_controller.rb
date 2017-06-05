class BookingsController < ApplicationController
  before_action :set_booking, only: [:show, :edit, :update, :destroy]

  # GET /bookings
  # GET /bookings.json
  def index
    @bookings = Booking.all
  end

  # GET /bookings/1
  # GET /bookings/1.json
  def show
    @booking = Booking.find_by(id: params['id'])
  end

def book
    # When this request hits the controller
    # Find the booking with the right ID ( params[:id] )
    # Set the owner id to be the ID of whoever is logged in
    # Set available to be false
    # Save that booking
    # Redirect back to /available_bookings
  @booking = Booking.find_by(id: params["id"])
  @booking.owner_id = @current_user.id
  @booking.available = false
  @booking.save
  redirect_to "/available_bookings"

end

def unbook
  booking = Booking.find_by(id: params[:id])
  booking.available = true
  booking.owner_id = nil
  booking.save

  redirect_to :back
end

  def available_bookings
    @available_bookings = Booking.where(available: true)
  end

  def booked_users
     Booking.where(owner_id: @current_user.id)
  end

  # GET /bookings/new
  def new
    @booking = Booking.new
  end

  # GET /bookings/1/edit
  def edit
    @booking = Booking.find_by(id: params['id'])
  end

  # POST /bookings
  # POST /bookings.json
  def create
    @booking = Booking.new(booking_params)
    @booking.sitter_id = @current_user.id
    # raise "hell"
    respond_to do |format|
      if @booking.save
        format.html { redirect_to @booking, notice: 'Booking was successfully created.' }
        format.json { render :show, status: :created, location: @booking }
      else
        format.html { render :new }
        format.json { render json: @booking.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /bookings/1
  # PATCH/PUT /bookings/1.json
  def update
    respond_to do |format|
      if @booking.update(booking_params)
        format.html { redirect_to @booking, notice: 'Booking was successfully updated.' }
        format.json { render :show, status: :ok, location: @booking }
      else
        format.html { render :edit }
        format.json { render json: @booking.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /bookings/1
  # DELETE /bookings/1.json
  def destroy
    @booking.destroy
    respond_to do |format|
      format.html { redirect_to bookings_url, notice: 'Booking was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_booking
      @booking = Booking.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def booking_params
      # params.fetch(:booking, {})
      params.require(:booking).permit(:start_time, :end_time, :service_id, :owner_id, :sitter_id)
    end
end
