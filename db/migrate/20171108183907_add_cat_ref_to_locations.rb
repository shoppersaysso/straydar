class AddCatRefToLocations < ActiveRecord::Migration[5.1]
  def change
    add_reference :locations, :cat, foreign_key: true
  end
end
