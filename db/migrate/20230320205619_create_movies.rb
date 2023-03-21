class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :image_url
      t.integer :rating
      t.string :genre
      t.integer :run_time
      t.integer :overall_review
      t.datetime :release_date

      t.timestamps
    end
  end
end
