# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "faker"


10.times do
  PhotoSet.create(
    pointer: "This is a faker  lead url",
    leadPointer: "This is a faker url",
    location: Faker::Address.street_name,
    name: Faker::Name.name
  )
end

puts '10 photos seeds'