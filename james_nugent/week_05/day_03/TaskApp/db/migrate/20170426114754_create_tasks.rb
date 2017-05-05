class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.text :name
      t.text :description
      t.text :priority
      t.timestamp :start_time
      t.date :due_date
      t.time :due_time
      t.boolean :overdue_status
    end
  end
end
