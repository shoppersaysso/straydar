class AddLikesToCat < ActiveRecord::Migration[5.1]
  def change
    add_column :cats, :likes, :integer, default: 0
  end
end
