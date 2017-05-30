class JournalsController < ApplicationController
  def index

      @all_journals = Journal.all

    end

    def show
      @journal = Journal.find_by(id: params["id"])
    end

    def new
      @journal = Journal.new
    end

    def create
      journal = Journal.create(journal_strong_params())
      redirect_to "/journals/#{@journal.id}"
    end

    def edit
      @ajournal = Journal.find_by(id: params["id"])
      #Prefill values
      #Reuse the new form
    end

    def destroy
      journal = Journal.find_by(id:params["id"])
      journal.destroy
      redirect_to "/journals"
  end

    def update
  journal = Journal.find_by(id: params["id"])
  journal.update(journal_strong_params())
  redirect_to "/journals/#{journal.id}"
    end

    private
    def journal_strong_params
      params.require(:journal).permit(:journalname, :numberofentries, :per, :wordcount)
    end
  end
