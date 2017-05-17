class EventsController < ApplicationController
  def index
    @all_events = Event.all
  end

  def show
    @event = Event.find_by(id: params["id"])
  end

  def new
    @event = Event.new
  end

  def create
    event = Event.create ( event_params)
    redirect_to event_path(event)
  end

  def edit

    @event = Event.find_by(id: params["id"])
  end

  def update
    event = Event.find_by(id: params["id"])
    event.update (event_params)
    redirect_to event_path(event)
  end

  def destroy
    event = Event.find_by(id: params["id"])
    event.destroy
    redirect_to events_path
  end

  private
  def event_params
    params.require(:event).permit(:band, :date, :ticket, :photos, :venue_id)
  end
end
