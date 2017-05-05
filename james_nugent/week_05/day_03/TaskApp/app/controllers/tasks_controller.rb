class TasksController < ApplicationController
  def index
    @all_tasks = Task.all
  end

  def show
    id = params["id"]
    @task = Task.find_by(id: id)
  end

  def edit
    id = params["id"]
    @task = Task.find_by(id: id)
  end

  def update
    task = Task.find_by(id: params["id"])
    task.update( task_params )
    redirect_to "/tasks/#{task.id}"
  end

  def new
  end

  def create
    task = Task.create( task_params() )
    redirect_to "/tasks"
  end

  def destroy
    task = Task.find_by(id: params["id"])
    task.destroy
    redirect_to "/tasks"
  end

  def task_params
      # Strong params/strict params
      params.require(:task).permit(:name, :description, :priority, :start_time, :due_date, :due_time, :overdue_status)
    end


end
