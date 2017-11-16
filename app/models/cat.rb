class Cat < ApplicationRecord
  has_many :locations
  has_attached_file :photo,
  :styles => { :original => "300x300>", :thumb => "100x100>" },
  :default_url => "assets/images/:style/missing.png"
  validates_attachment :photo, presence: true
  do_not_validate_attachment_file_type :photo


  def photo_url
    photo.url
  end


end
