class CatSerializer < ActiveModel::Serializer
  attributes :id, :color, :age, :details, :photo
  has_many :locations
end
