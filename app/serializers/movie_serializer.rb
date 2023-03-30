class MovieSerializer < ActiveModel::Serializer
  has_many :reviews

  attributes :id, :title, :release_date, :rated, :runtime, :genre, :director, :actors, :description, :poster
end
