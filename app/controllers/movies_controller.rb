class MoviesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        movies = Movie.all
        render json: movies
    end

    def show
        movie = movie.find(params[:title])
        render json: movie, status: :ok
    end

    private

    def render_not_found_response
        render json: { "Movie not found" }, status: :not_found
    end

end
