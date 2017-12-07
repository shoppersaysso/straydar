class Cat < ApplicationRecord
  before_validation :parse_photo
  attr_accessor :photo_base
  reverse_geocoded_by :latitude, :longitude
  after_validation :reverse_geocode

  has_attached_file :photo,
  :storage => :cloudinary,
  :styles => { :original => "300x300>", :thumb => "100x100>" },
  :default_url => "/images/missing.png",
  :path => ':id/:style:/:filename'

  do_not_validate_attachment_file_type :photo


  def photo_url
    photo.url(:thumb)
  end

  private
  def parse_photo
    photo = Paperclip.io_adapters.for(photo_base)
    photo.original_filename = "cat.jpg"
    self.photo = photo
  end

end
