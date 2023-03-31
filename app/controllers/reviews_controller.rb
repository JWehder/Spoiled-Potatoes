class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def create
        review = Review.create!(review_params)
        render json: review.movie, status: :created
    end

    private

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def review_params
        params.permit(:rating, :comment, :user_id, :movie_id)
    end

end
