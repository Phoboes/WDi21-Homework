class AutoController < ApplicationController
  def color
    @color = params["color"]
  end


def car_details

@hp = params["hp"]
@torque = params["torque"]
end

end
