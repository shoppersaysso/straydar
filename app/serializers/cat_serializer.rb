class CatSerializer < ActiveModel::Serializer
  attributes :id, :color, :age, :details, :photo, :photo_url
  has_many :locations
end
