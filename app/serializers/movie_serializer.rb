class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :rating, :genre, :run_time, :overall_review, :release_date
end
