const fs = require("fs");
let data = fs.readFileSync("db.json");
let users = JSON.parse(data);

function createUser(id, name, city) {
  users[id] = {
    name,
    city,
  };
}

createUser(
  1,
  "That dude from jake pauls gang or whatever tf",
  "England is his city"
);
createUser(2, "Ali", "I am the city.");

console.log(users);
