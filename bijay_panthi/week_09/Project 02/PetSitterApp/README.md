
Services/Show

<h4>Services Provided</h4>
<div class="container">
  <div class="row">
  <% @userall.each do |u| %>
  <% @all_services.each do |s| %>
    <div class="listImage">
  <%= link_to 'Show', user %>
      <p><%= u.name %></p>
      <p><%= u.location %></p>
      <p><%= s.name %></p>
      <p><%= s.description %></p>
      <p><%= s.price %></p>
      <hr>
    </div>
  <% end %>
  <% end %>
  </div>
</div>


RatyRate

---

On models:

ratyrate_rateable "name"
- A particular instance of the model can be rated based on their name

ratyrate_rater
- A particular instance of the model can actual rate

---

How to use:

TO GET A PARTICULAR USER'S RATES
u.rates

TO RATE A PARTICULAR USER

USER_TO_BE_RATED.rate( NUMBER_OF_STARS_OUT_OF_5, USER_TO_DO_THE_RATING )

# e.g. bill.rate( 4, qwe )

TO GET A PARTICULAR USER'S RATINGS

USER.rates

# e.g. bill.rates

FIGURE OUT WHO YOU HAVE RATED

USER.ratings_given

# e.g. bill.ratings_given

TO UNRATE SOMEONE

USER_THAT_DID_THE_RATING.unrate( USER_TO_BE_UNRATED )

# e.g. hash.unrate( bill )

TO FIND THE AVERAGE RATING

USER.average_rating

# e.g. bill.average_rating
