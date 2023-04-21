class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment, :user_id, :movie_id, :created_at 

  belongs_to :user
end
