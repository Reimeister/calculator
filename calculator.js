//This is the JS file for the calculator project
//Use an array to collect the data and use the indicies needed for numbers and operators
let firstNum = 5
let secondNum = 8
let op = "*"

function performOperation(op, a, b) {
   switch(op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return a / b;
    default: "ERROR"
   }
}

performOperation(op, firstNum, SecondNum)