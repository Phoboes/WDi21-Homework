class Entry < ApplicationRecord
  belongs_to :journal, optional:true

end
