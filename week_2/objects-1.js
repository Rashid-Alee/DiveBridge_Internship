var myObj = {


    name: "Rashid Ali",
    city: "lahore",
    CGPA: 3.25,
    company: "diveBridge",

}

function CheckObj(probs) {

    if (myObj.hasOwnProperty(probs)) {

        return myObj[probs];
    }

    else {

        return ('no such property')


    }
}



console.log(CheckObj('Name'))