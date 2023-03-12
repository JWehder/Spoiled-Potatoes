class AddBioAndFavoriteMovieToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :bio, :string
    add_column :users, :favorite_movie, :string
  end
end
