# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?

kitty1 = Cat.create!(
  color: "black",
  age: "Adult",
  details: "Has white on front two paws",
  photo: File.new("#{Rails.root}/client/public/images/blackcat.jpg"),
  address: "164 Bedford Avenue, Brooklyn, NY",
  latitude: 40.718369,
  longitude: -73.957607
)

kitty2 = Cat.create!(
  color: "gray",
  age: "Adult",
  details: "striped",
  photo: File.new("#{Rails.root}/client/public/images/graystriped.jpeg"),
  address: "602 Driggs Avenue, Brooklyn, NY",
  latitude: 40.715975,
  longitude: -73.957996
)
kitty3 = Cat.create!(
  color: "gray",
  age: "Adult",
  details: "striped, bright green eyes",
  photo: File.new("#{Rails.root}/client/public/images/greeneyes.jpeg"),
  address: "50 N 5th Street, Brooklyn, NY",
  latitude: 40.718564,
  longitude: -73.961922
)

kitty4 = Cat.create!(
  color: "orange",
  age: "Kitten",
  details: "striped",
  photo: File.new("#{Rails.root}/client/public/images/orangekitten.jpeg"),
  address: "124 S. 4th Street, Brooklyn, NY",
  latitude: 40.712118,
  longitude: -73.963064
)

kitty5 = Cat.create!(
  color: "gray",
  age: "Adult",
  details: "white chest and belly",
  photo: File.new("#{Rails.root}/client/public/images/graytabby.jpeg"),
  address: "83 N 7th St, Brooklyn, NY",
  latitude: 40.719856,
  longitude: -73.959940
)

kitty6 = Cat.create!(
  color: "calico",
  age: "Kitten",
  details: "likes to climb trees",
  photo: File.new("#{Rails.root}/client/public/images/calico.jpg"),
  address: "57 N 7th St, Brooklyn, NY",
  latitude: 40.720908,
  longitude: -73.962105
)
