class Mta
  @lines = {
    :N => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    :L => ["8th", "6th", "Union Square", "3rd", "1st" ],
    :"6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }

  def initialize(start_line, start_station, end_line, end_station)
    @start_line = start_line
    @start_station = start_station
    @end_line = end_line
    @end_station = end_station
  end

  def first_leg()
    start_station = lines[@start_line].index(@start_station)
    union_index = lines[@start_line].index(@start_station)
    if start_station > union_index

    end
  end
end