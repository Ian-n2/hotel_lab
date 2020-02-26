use hotel;
db.dropDatabase();

db.manage.insertMany([
  {
    name: "Peter",
    email: "blabla@bla.com",
    checkedIn: true
  },
  {
    name: "Ian",
    email: "Big_Ian@coolclub.com",
    checkedIn: false
  },
  {
    name: "Niall",
    email: "musicman@downyourway.com",
    checkedIn: true
  }
])
