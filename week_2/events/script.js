let button = document.getElementById('counterBtn');

let reset_btn = document.getElementById('resetBtn');



let count = 0;

button.addEventListener("click", function () {

    count += 1;

    button.textContent = `clicked ${count} times`;
});


reset_btn.addEventListener("click", function () {

    count = 0

    button.textContent = ` clicked ${count} times`;

    reset_btn.textContent = "Reset"

});

