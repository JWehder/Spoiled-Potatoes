class ApplicationController < ActionController::API
  include ActionController::Cookies
  wrap_parameters false
  before_action :authorize
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  private

  def authorize
      render json: { error: "not authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def render_unprocessable_entity(invalid)
    render json: { errors: invalid.record.errors }, status: :unprocessable_entity
  end

end
