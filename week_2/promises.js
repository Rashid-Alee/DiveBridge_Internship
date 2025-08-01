// console.log("one");
// console.log("two");

// function timer(){

//     console.log("Rashid")
// }

// setTimeout(timer, 4000); //4 sec

// console.log("three");

// console.log("four");

//call back, calling a function on another function


function sum(a, b) {

    console.log(a + b);
}

function calc(a, b, ca) {
    ca(a, b);
}



function getData(getId) {

    setTimeout(() => {

        console.log(getId);

    }
        , 2000);
}

getData(1);
getData(2);
getData(3);