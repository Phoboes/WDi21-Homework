json.extract! user, :id, :firstName, :lastName, :password, :created_at, :updated_at
json.url user_url(user, format: :json)
