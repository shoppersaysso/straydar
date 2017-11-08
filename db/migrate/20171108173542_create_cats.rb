class CreateCats < ActiveRecord::Migration[5.1]
  def change
    create_table :cats do |t|
      t.string :color
      t.string :age
      t.string :details
      t.boolean :rescued, :default => false

      t.timestamps
    end
  end
end
