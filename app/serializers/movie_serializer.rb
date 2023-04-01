class MovieSerializer < ActiveModel::Serializer
  has_many :reviews
  has_many :users

  attributes :id, :title, :release_date, :rated, :runtime, :genre, :director, :actors, :description, :poster
end
