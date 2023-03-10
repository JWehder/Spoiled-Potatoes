class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: render_unprocessable_entity

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    private

    def render_record_invalid_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def user_params
        params.permit(:first_name, :last_name, :username, :email, :password, :password_confirmation)
    end


end
