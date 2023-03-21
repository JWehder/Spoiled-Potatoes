class MoviesController < ApplicationController

    def index
        movies = Movie.all
        render json: movies
    end

    def show
        
    end
end
