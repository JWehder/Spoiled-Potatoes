class Movie < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    def overall_rating
        self.reviews.average(:rating)
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
