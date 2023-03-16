class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def forgot_password
        user = User.find_by(email: params[:email])
        if user 
            PasswordResetMailer.password_reset(user)
            render json: { message: "Email sent" }, status: :ok 
        else
            render json: { errors: "Email not found" }, status: :not_found
        end
    end

    def reset_password
        user = User.find_by(code: params[:code])
        if user
            render json: { message: "authenticated" }, status: :ok
        else
            render json: { errors: "incorrect code" }, status: :unauthorized
        end
    end

    private

    def render_not_found_response
        render json: { error: ["User not found"] }, status: :not_found
    end

    def user_params
        params.permit(:first_name, :last_name, :username, :email, :password, :password_confirmation)
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
