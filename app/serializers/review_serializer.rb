class ReviewSerializer < ActiveModel::Serializer
  belongs_to :user

  attributes :id, :rating, :comment, :user_id, :movie_id
end
