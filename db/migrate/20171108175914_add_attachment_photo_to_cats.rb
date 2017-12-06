class AddAttachmentPhotoToCats < ActiveRecord::Migration[5.1]
  def self.up
    change_table :cats do |t|
      t.attachment :photo
    end
  end

  def self.down
    remove_attachment :cats, :photo
  end
end
