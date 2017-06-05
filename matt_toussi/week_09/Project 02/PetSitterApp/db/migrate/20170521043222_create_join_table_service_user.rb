class CreateJoinTableServiceUser < ActiveRecord::Migration[5.0]
  def change
    create_join_table :services, :users do |t|
      t.index [:service_id, :user_id]
      t.index [:user_id, :service_id]
    end
  end
end
