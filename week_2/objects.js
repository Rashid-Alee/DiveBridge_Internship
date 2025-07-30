let myContact = {
  name: "Rashid",
  email: "Rashid@example.com",
  phone: "123-456-7890",
  role: "Intern"
};

myContact.name = "Rashid ALi";

myContact.city = "kashmore";

delete myContact.role;



console.log(`name: ${myContact.name}`);
console.log(`Email: ${myContact.email}`);
console.log("city:" + myContact.city);




// can access properties with this
// console.log(myContact['name'])




let contacts = [
  {
    name: "Alice",
    email: "alice@example.com",
    role: "Developer"
  },
  {
    name: "Bob",
    email: "bob@example.com",
    role: "Designer"
  },
  {
    name: "Charlie",
    email: "charlie@example.com",
    role: "Manager"
  }
];

contacts.push({
  name: "Diana",
  email: "diana@example.com",
  role: "DevOps",
});

// contacts[0].city="kashmore";
contacts[0]['city'] = "kashmore";

console.log("contact list")

contacts.forEach(function (person) {
  console.log("");

  console.log(`${person.name}`);
  console.log(`Email: ${person.email}`);
  console.log(`Role: ${person.role}`);
  person.city = "kashmore";
  console.log("city:" + person.city);


  console.log("");
})