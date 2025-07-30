function switchStatment(val) {

    var ans;


    switch (val) {
        case 1:
            ans = "alpha";
            break;

        case 2:
            ans = "beta";
            break;

        case 3:
            ans = "gamma";
            break;

        default:
            ans = "unknown";
            break;




    }

    return ans;


}

console.log(switchStatment(1));