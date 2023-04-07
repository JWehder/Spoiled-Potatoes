class AddGenreToMovies < ActiveRecord::Migration[6.1]
  def change
    add_column :movies, :genre, :string, array: true, default: []
  end
end
