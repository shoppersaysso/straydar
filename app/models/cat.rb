class Cat < ApplicationRecord
  has_many :locations
  has_attached_file :photo,
  :styles => { :original => "300x300>", :thumb => "100x100>" },
  :default_url => "assets/images/:style/default.jpg"
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\z/


  def photo_url
    photo.url
  end


end
