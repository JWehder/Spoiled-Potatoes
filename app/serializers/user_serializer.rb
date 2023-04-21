class UserSerializer < ActiveModel::Serializer
  attributes :username, :email, :id, :unique_movies

  has_many :reviews
end
