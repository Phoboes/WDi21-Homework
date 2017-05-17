class EntriesController < ApplicationController
    def index
      @all_entries = Entry.all
    end

    def show
      @entry = Entry.find_by(id: params["id"])
    end

    def new
      @entry = Entry.new
    end

    def create
      entry = Entry.create(entry_strong_params())
      redirect_to "/entries/#{@entry.id}"
    end

    def edit
      @entry = Entry.find_by(id: params["id"])
      #Prefill values
      #Reuse the new form
    end

    def destroy
      entry = Entry.find_by(id:params["id"])
      entry.destroy
      redirect_to "/entries"
    end

    def update
      entry = Entry.find_by(id: params["id"])
      entry.update(entry_strong_params())
      redirect_to "/entries/#{entry.id}"
    end

    private
    def entry_strong_params
      params.require(:entry).permit(:entrytext)
  end
end
