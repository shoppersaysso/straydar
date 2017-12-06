class Cat < ApplicationRecord
  reverse_geocoded_by :latitude, :longitude
  after_validation :reverse_geocode

  has_attached_file :photo,
  :storage => :cloudinary,
  :styles => { :original => "300x300>", :thumb => "100x100>" },
  :default_url => "assets/images/:style/missing.png",
  :path => ':id/:style:/:filename'
  
  do_not_validate_attachment_file_type :photo


  def photo_url
    photo.url(:thumb)
  end


end
