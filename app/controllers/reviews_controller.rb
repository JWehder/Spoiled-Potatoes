class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def create
        user = User.find_by(id: params[:user_id])
        review = user.reviews.create!(review_params)
        render json: [review.movie, review.user], status: :created
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

    def render_not_found_response
        render json: { error: "Review not found" }, status: :not_found
    end

    def review_params
        params.permit(:rating, :comment, :movie_id, :user_id)
    end

end
