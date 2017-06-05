class ChangeColumnName < ActiveRecord::Migration[5.0]
  def change
    rename_column :pets, :type, :type_of_pet
    rename_column :pets, :age, :date_of_birth
  end
end
