let displayValue = '0';

let firstNumber = '';
let operator = '';
let waitingForOperand = false;

const display = document.querySelector('.result');

function updateDisplay() {
    display.textContent = displayValue;
    console.log("Display updated to:", displayValue);
}

updateDisplay();

//calculation functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a,b){
    if(b===0){
        return " error: can't divide by zero"
    }

    return a/b;
}

function percentage(num) {
    return num / 100;
}

function toggleSign(num) {
    return -num;  
}

// Number buttons
const numberButtons = document.querySelectorAll('.btn.number');

numberButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const buttonText = button.textContent;
        console.log("Number button clicked:", buttonText);

        if (waitingForOperand) {
            displayValue = '0';
            waitingForOperand = false;
        }

        if (buttonText === '.') {
            if (displayValue.includes('.')) {
                return;
            } else {
                displayValue = displayValue + '.';
            }
        } else {
            if (displayValue === '0') {
                displayValue = buttonText;
            } else {
                displayValue = displayValue + buttonText;
            }
        }

        updateDisplay();
    });
});


const allButtons = document.querySelectorAll('buttons');
console.log(allButtons)

// Plus button
let plusButton = null;
allButtons.forEach(function (button) {
    if (button.textContent === '+') {
        plusButton = button;
    }
});

if (plusButton) {
    plusButton.addEventListener('click', function () {
        console.log("+ button clicked!");
        firstNumber = displayValue;
        operator = '+';
        waitingForOperand = true;
        console.log("Saved:", firstNumber, operator);
    });
}

// Minus button
let minusButton = null;
allButtons.forEach(function (button) {
    if (button.textContent === '-') {
        minusButton = button;
        console.log("Found - button!");
    }
});

if (minusButton) {
    minusButton.addEventListener('click', function () {
        console.log("- button clicked!");
        firstNumber = displayValue;
        operator = '-';
        waitingForOperand = true;
        console.log("Saved:", firstNumber, operator);
    });
}

let multiplyButton = null;
allButtons.forEach(function (button) {
    if (button.textContent === '×') {
        multiplyButton = button;  
        console.log("Found × button!");
    }
});

if (multiplyButton) {
    multiplyButton.addEventListener('click', function () {  
        console.log("× button clicked!");
        firstNumber = displayValue;
        operator = '×';  
        waitingForOperand = true;
        console.log("Saved:", firstNumber, operator);
    });
}

let divideButton = null;
allButtons.forEach(function (button) {
    if (button.textContent === '÷') {
        divideButton = button;
    }
});

if (divideButton) {
    divideButton.addEventListener('click', function () {
        console.log("/ button clicked!");
        firstNumber = displayValue;
        operator = '/';
        waitingForOperand = true;
        console.log("Saved:", firstNumber, operator);
    });
}

let percentageButton = null;
allButtons.forEach(function (button) {
    if (button.textContent === '%') {
        percentageButton = button;
        console.log("Found % button!");
    }
});

if (percentageButton) {
    percentageButton.addEventListener('click', function () {
        console.log("% button clicked!");
        
        // Convert current display to percentage
        const currentNumber = parseFloat(displayValue);
        const result = percentage(currentNumber);
        
        console.log(currentNumber, "% =", result);
        
        displayValue = result.toString();
        
        waitingForOperand = true;
        
        updateDisplay();
    });
}

let plusMinusButton = null;
allButtons.forEach(function (button) {
    if (button.textContent === '+/-') {
        plusMinusButton = button;
        console.log("Found +/- button!");
    }
});

if (plusMinusButton) {
    plusMinusButton.addEventListener('click', function () {
        console.log("+/- button clicked!");
        
        const currentNumber = parseFloat(displayValue);
        
        const result = toggleSign(currentNumber);
        console.log("After sign change:", result);
        
        displayValue = result.toString();
        
        updateDisplay();
    });
}



// Equals button
let equalsButton = null;
allButtons.forEach(function (button) {
    if (button.textContent === '=') {
        equalsButton = button;
    }
});

if (equalsButton) {
    equalsButton.addEventListener('click', function () {

        if (firstNumber !== '' && operator !== '') {
            const num1 = parseFloat(firstNumber);
            const num2 = parseFloat(displayValue);
            let result;

            if (operator === '+') {
                result = add(num1, num2);
                console.log("Addition:", num1, "+", num2, "=", result);
            } else if (operator === '-') {
                result = subtract(num1, num2);
                console.log("Subtraction:", num1, "-", num2, "=", result);
            } else if (operator === '×') {  
                result = multiply(num1, num2); 
                console.log("Multiplication:", num1, "×", num2, "=", result);
            }

            else if (operator === '/') {  
                result = divide(num1, num2); 
                console.log("division:", num1, "/", num2, "=", result);
            }

            displayValue = result.toString();
            firstNumber = '';
            operator = '';
            waitingForOperand = true;
        }

        updateDisplay();
    });
}

// AC button
const acButton = document.querySelector('.btn.special');
acButton.addEventListener("click", function () {
    displayValue = '0';
    firstNumber = '';
    operator = '';
    waitingForOperand = false;
    updateDisplay();
});

