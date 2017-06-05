Cloudinary.config do |config|
  config.cloud_name = ENV["PETSITTER_CLOUDINARY_CLOUD_NAME"]
  config.api_key = ENV["PETSITTER_CLOUDINARY_API_KEY"]
  config.api_secret = ENV["PETSITTER_CLOUDINARY_API_SECRET"]
end
