let myContact = {
  name: "Rashid",
  email: "Rashid@example.com",
  phone: "123-456-7890",
  role: "Intern"
};

console.log( `name: ${ myContact.name}`);
console.log(`Email: ${myContact.email}`);



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

console.log("contact list")

contacts.forEach(function(person){
    console.log("");

    console.log(`${person.name}`);
    console.log(`Email: ${person.email}`);
    console.log(`Role: ${person.role}`);

    console.log("");
})