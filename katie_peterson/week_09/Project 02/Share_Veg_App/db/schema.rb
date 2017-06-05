# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170524061136) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "item_id"
    t.text     "post"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "conversations", force: :cascade do |t|
    t.integer  "sender_id"
    t.integer  "recipient_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "items", force: :cascade do |t|
    t.integer  "user_id"
    t.text     "name"
    t.text     "description"
    t.text     "image"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.text     "public_id"
    t.text     "collected"
  end

  create_table "messages", force: :cascade do |t|
    t.text     "body"
    t.integer  "conversation_id"
    t.integer  "user_id"
    t.boolean  "read",            default: false
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
  end

  create_table "users", force: :cascade do |t|
    t.text     "name"
    t.text     "email"
    t.text     "image"
    t.text     "bio"
    t.text     "likes"
    t.text     "dislikes"
    t.text     "allergies"
    t.string   "slug"
    t.text     "password_digest"
    t.text     "public_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.text     "building_number"
    t.text     "street"
    t.text     "city"
    t.text     "state"
    t.text     "country"
    t.text     "latitude"
    t.text     "longitude"
    t.integer  "mobile"
    t.index ["slug"], name: "index_users_on_slug", unique: true, using: :btree
  end

  create_table "votes", force: :cascade do |t|
    t.string   "votable_type"
    t.integer  "votable_id"
    t.string   "voter_type"
    t.integer  "voter_id"
    t.boolean  "vote_flag"
    t.string   "vote_scope"
    t.integer  "vote_weight"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["votable_id", "votable_type", "vote_scope"], name: "index_votes_on_votable_id_and_votable_type_and_vote_scope", using: :btree
    t.index ["voter_id", "voter_type", "vote_scope"], name: "index_votes_on_voter_id_and_voter_type_and_vote_scope", using: :btree
  end

end
