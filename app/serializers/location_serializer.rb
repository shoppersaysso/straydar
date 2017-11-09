class LocationSerializer < ActiveModel::Serializer
  attributes :id, :longitude, :lattitude
  belongs_to :cat
end
