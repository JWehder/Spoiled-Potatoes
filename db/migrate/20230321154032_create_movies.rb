class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :release_date
      t.string :rated
      t.string :runtime
      t.string :genre
      t.string :director
      t.string :actors
      t.string :description
      t.string :poster

      t.timestamps
    end
  end
end
