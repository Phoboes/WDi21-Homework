require 'rails_helper'

# To be tested in models
  # Validations
  # Class methods
  # Instance methods
  # Associations

RSpec.describe Contact, type: :model do
  it("is valid with a first_name, last_name and an email") do
    contact = Contact.new(first_name: "Bill", last_name: "Murray", email: "bill@ga.co")
    expect(contact).to(be_valid)
  end
  
  it("is invalid without a first_name") do
    contact = Contact.new(first_name: nil, last_name: "Murray", email: "bill@ga.co")
    contact.valid?
    expect(contact.errors.full_messages).to(include("First name can't be blank"))
  end
  
  it("is invalid without a last_name") do
    contact = Contact.new(last_name: nil, first_name: "Patrick", email: "pat@ga.co")
    contact.valid?
    expect(contact.errors.full_messages).to(include("Last name can't be blank"))
  end
  
  it("is invalid without an email") do
    contact = Contact.new(first_name: "Donald", last_name: "Trump", email: nil)
    contact.valid?
    expect(contact.errors.full_messages).to(include("Email can't be blank"))
  end
  
  it("is invalid with a duplicate email address") do
    c1 = Contact.new(first_name: "Mike", last_name: "Pence", email: "pence@ga.co")
    c1.save
    contact = Contact.new(first_name: "Tonald", last_name: "Drump", email: "pence@ga.co")
    contact.valid?
    expect(contact.errors.full_messages).to(include("Email has already been taken"))
  end
  
  it("should return a full_name as a string") do
    
  end
  
end
