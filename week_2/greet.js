// function greet(name) {
//   console.log(`Hello, ${name}! Welcome to JavaScript.`);
// }


// // Call the function
// greet("Alex");
// greet("Sam");


// personalInfo function

// function personalInfo(name , age , city){

//   console.log( `My name is ${ name}, i am ${ age} years old and i am from ${city} `)

// }

// personalInfo('Rashid', '22', 'kashmore')



// function canVote(age){

// if (age>=18){

//   console.log( `you age is ${age}. you can give the vote`)
// }

// else{

//   console.log( `your age is ${age}. sorry, you can't vote. `)
// }

// }
// canVote(21)
// canVote(15)


function ageCategory(age) {
  if (age < 13) {
    return "Child";
  } else if (age < 20) {
    return "Teen";
  } else if (age < 65) {
    return "Adult";
  } else {
    return "Senior";
  }

}

function smartGreet(name, age) {
  let category = ageCategory(age);
  let greeting = `Hello, ${name}! You're ${age} years old.`;

  if (category === "Child") {
    greeting += " Hope you're having fun at school!";
  } else if (category === "Teen") {
    greeting += " Studying hard for exams?";
  } else if (category === "Adult") {
    greeting += " How's work going?";
  } else {
    greeting += " Wishing you health and peace.";
  }

  return greeting;
}


console.log(smartGreet("Lia", 10));
console.log(smartGreet("Sam", 17));
console.log(smartGreet("Jordan", 28));
console.log(smartGreet("Eve", 70));