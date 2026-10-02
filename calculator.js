/*
* Purpose: Calculate basic add, subtract, divide, and multiply operations
* Owner: Brian Karimi
* Course: SDPT016
* Last Modification: 17:44 hrs
*/

const calculationHistory = []
const subtractionHistory = {}
const multiplyHistory = []

// Utility: adds two values
// Params: two variables (numbers)
// Returns: sum
function add(num1, num2){
    let sum = num1 + num2;
    console.log(sum);
    addToHistory(sum);
    return sum;
}

// Utility: adds to the calculation
//          history
// Params: result of the operation
function addToHistory(result){
    calculationHistory.push(result);
}

// Utility: displays the history of all
//          calculations
function getHistory(){
    if (calculationHistory.length == 0){
        console.log("No calculations stored");
        return;
    }
    console.log(calculationHistory);
}

// Utility: subtracts two values
// Params: two variables (numbers)
// Returns: result of subtraction
function Subtract(num1, num2){
    let result = num1 - num2;
    console.log(result);
    addToHistory(result);
    return result;
}

// Utility: multiplies two values
// Params: two variables (numbers)
// Returns: result of the multiplication
function multiply(num1, num2){
    const result = num1 * num2;
    console.log(result);
    addToHistory(result);
    return result;
}

// Utility: divides two values
// Params: two variables (numbers)
// Returns: result of division
function divide(num1, num2){
    let result = num1 / num2;
    console.log(result);
    addToHistory(result);
    return result;
}