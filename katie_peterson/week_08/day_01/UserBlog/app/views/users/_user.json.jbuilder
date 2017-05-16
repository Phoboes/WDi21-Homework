json.extract! user, :id, :firstname, :lastname, :bio, :created_at, :updated_at
json.url user_url(user, format: :json)
