class Billboard < ApplicationRecord
  has_many :artists, dependent: :destroy

  validates :title, :body, presence: true
end