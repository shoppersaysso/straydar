class CatSerializer < ActiveModel::Serializer
  attributes :id, :color, :age, :details, :photo, :photo_url, :address, :latitude, :longitude
end
