class Review < ApplicationRecord
    belongs_to :movie
    belongs_to :user

    validates :rating, presence: true, numericality: { greater_than: 0 }
    validates :comment, presence: true, length: { minimum: 10 }
end
