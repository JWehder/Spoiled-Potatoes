class MoviesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        movies = Movie.all
        render json: movies
    end

    def show
        movie = Movie.find(params[:title])
        render json: movie, status: :ok
    end

    def search
        results = Movie.where("title LIKE ?", "%#{params[:q]}%")
        render json: results
    end

    private

    def render_not_found_response
        render json: { error: "Movie not found" }, status: :not_found
    end

end
