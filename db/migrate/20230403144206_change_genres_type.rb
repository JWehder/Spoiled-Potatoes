class ChangeGenresType < ActiveRecord::Migration[6.1]
  def change
    change_column :movies, :genre, :string, array: true, default: []
  end
end
