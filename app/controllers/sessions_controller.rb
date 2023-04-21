class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id 
            render json: user, methods: [:unique_movies], status: :created
        else
            render json: { errors: ["Username or Password is incorrect"]}, status: :unauthorized
        end
    end

    def show
        user = find_user
        render json: user, methods: [:unique_movies], status: :ok
    end

    def destroy
        user = find_user
        if user
            session.delete :user_id
            head :no_content
        else
            render json: { errors: ["Not logged in"] }, status: :unauthorized
        end
    end

    private

    def find_user
        user = User.find_by(id: session[:user_id])
    end
end
