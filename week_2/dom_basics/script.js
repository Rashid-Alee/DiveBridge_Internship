document.getElementById('title').textContent = "Hi, I am Rashid, welcome to my js journey";

let today = new Date();
let dayName = today.toLocaleDateString("en-US", { weekday: "long" });


document.getElementById("message").textContent = `Today is ${dayName}. Let's learn DOM!`;