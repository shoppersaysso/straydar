class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.string :lattitude
      t.string :longitude

      t.timestamps
    end
  end
end
