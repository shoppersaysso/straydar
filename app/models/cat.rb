class Cat < ApplicationRecord
  has_many :locations
  has_attached_file :photo
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\z/
end
