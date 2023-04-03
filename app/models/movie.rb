class Movie < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    def overall_rating
        self.reviews.average(:rating)
    end
end
