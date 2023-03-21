class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :release_date, :rated, :runtime, :genre, :director, :actors, :description, :poster
end
