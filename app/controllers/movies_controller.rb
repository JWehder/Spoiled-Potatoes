class MoviesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorize, only: [:index]

    def index
        movies = Movie.all
        render json: movies, methods: [:overall_rating, :determine_category]
    end

    def show
        movie = Movie.find(params[:title])
        render json: movie, status: :ok
    end

    def create
        movie = Movie.create!(movie_params)
        render json: movie, status: :created
    end

    def search
        results = Movie.where("LOWER(title) LIKE ?", "%#{params[:q]}%")
        render json: results
    end

    private

    def render_not_found_response
        render json: { error: "Movie not found" }, status: :not_found
    end

    def movie_params
        params.permit(:title, :release_date, :rated, :runtime, :genre, :director, :actors, :description, :poster)
    end

end
