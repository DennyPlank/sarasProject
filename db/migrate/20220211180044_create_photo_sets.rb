class CreatePhotoSets < ActiveRecord::Migration[6.1]
  def change
    create_table :photo_sets do |t|
      t.string :pointer
      t.string :leadPointer
      t.string :name
      t.string :location

      t.timestamps
    end
  end
end
