class Song < ApplicationRecord
  belongs_to :artist

  validates :name, :rank, :album, :duration, presence: true
  validates :rank, numericality: {only_integer: true}
end
