function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b===0){
        return " error: can't divide by zero"
    }

    return a/b;
}

function percentage(num) 
{
  num = parseFloat(num);

  if (isNaN(num)) {
    return "Error: Invalid number";
  }

  return num / 100;
}

function calculate(num1, operator, num2) {
  // Convert strings to numbers (in case input is string)
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  // Check if numbers are valid
  if (isNaN(num1) || isNaN(num2)) {
    return "Error: Invalid number";
  }

  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return "Error: Invalid operator";
  }
}



