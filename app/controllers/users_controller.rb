class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def create
        user = User.create!(user_params)
        render json: user, status: :created
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
            render json: { email: params[:email] }, status: :ok 
        else
            render json: { errors: "Email not found" }, status: :not_found
        end
    end

    def reset_password
        user = User.find_by(email: params[:email])
        puts user.code
        if params[:code].nil?
            render json: { errors: "could not find a user with that code" }, status: :unauthorized
        else
            correct_code = user.code == params[:code]
            if correct_code
                render json: user.id, status: :ok
            else
                render json: { errors: "could not find a user with that code" }, status: :unauthorized
            end
        end
    end

    private

    def render_not_found_response
        render json: { error: ["User not found"] }, status: :not_found
    end

    def user_params
        params.permit(:first_name, :last_name, :username, :email, :password, :password_confirmation, :bio, :favorite_movie)
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

end
