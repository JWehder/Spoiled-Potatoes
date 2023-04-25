class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :forgot_password, :reset_password]
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response 

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = session[:user_id]
        render json: user, methods: [:unique_movies], status: :ok
    end

    def update
        user = User.find_by(id: params[:id])
        user.update!(user_params)
        render json: user, status: :ok
    end

    def forgot_password
        user = User.find_by(email: params[:email])
        if user 
            PasswordResetMailer.password_reset(user).deliver_now
            render json: { status: "All good" }, status: :ok 
        else
            render json: { errors: "Email not found" }, status: :not_found
        end
    end

    def reset_password
        user = User.find_by(email: params[:email])
        if params[:code].nil?
            render json: user.code, status: :unauthorized
        else
            correct_code = user.code == params[:code]
            if correct_code
                session[:user_id] = user.id
                render json: user.id, status: :ok
            else
                render json: user.code, status: :unauthorized
            end
        end
    end

    private

    def render_not_found_response
        render json: { error: ["User not found"] }, status: :not_found
    end

    def user_params
        params.permit(:first_name, :last_name, :username, :email, :password, :password_confirmation, :bio, :favorite_movie, :code, :request_time)
    end

end
