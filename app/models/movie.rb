class Movie < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews

    def overall_rating
        average_rating = self.reviews.average(:rating) 
        if average_rating.nil?
            0
        else
            (average_rating * 20).round
        end
    end

    def overall_rating_hash
        { overall_rating: self.overall_rating }
    end

    def self.top_movies
        # grab all movies from the movie model
        movies = Movie.all.sort_by { |movie| -movie.count}
        [movies[0].reviews, movies[1].reviews, movies[2].reviews]
    end

    def count 
        self.reviews.count
    end

    def determine_category
        category = self.genre.find { |genre| genre == "Comedy" || genre == "Documentary" || genre == "Drama" }
        category
    end

    validates :title, presence: true
    validates :release_date, presence: true
    validates :rated, presence: true, length: { maximum: 6 }
    validates :runtime, presence: true
    validates :genre, presence: true
    validates :director, presence: true
    validates :actors, presence: true
    validates :description, presence: true, length: { minimum: 50 }
    validates :poster, presence: true
    
end
