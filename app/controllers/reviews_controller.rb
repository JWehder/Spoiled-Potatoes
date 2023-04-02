class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def create
        user = User.find_by(username: params[:username])
        review = user.reviews.create!(review_params)
        render json: review.movie, status: :created
    end

    def update
        review = Review.find(params[:id])
        review.update!(review_params)
        render json: review.movie, status: :accepted
    end

    def destroy
        review = Review.find(params[:id])
        movie = review.movie
        review.destroy
        render json: movie
    end

    private

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

    def review_params
        params.permit(:rating, :comment, :movie_id)
    end

end
