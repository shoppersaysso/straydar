class Cat < ApplicationRecord
  geocoded_by :address
  after_validation :geocode

  has_attached_file :photo,
  :styles => { :original => "300x300>", :thumb => "100x100>" },
  :default_url => "assets/images/:style/missing.png"
  do_not_validate_attachment_file_type :photo


  def photo_url
    photo.url(:thumb)
  end


end
