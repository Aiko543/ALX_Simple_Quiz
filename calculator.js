// add function for a simple calculator
function add(number1, number2) {
    return number1 + number2;
}

// subtract function for a simple calculator
function subtract(number1, number2) {
    return number1 - number2;
}

// multiply function for a simple calculator
function multiply(number1, number2) {
    return number1 * number2;
}

// divide function for a simple calculator
function divide(number1, number2) {
    if (number2 !== 0) {
        return number1 / number2;
    } else {
        return "Division by zero error";
    }
}

// displayResult function to show the result in the HTML
function displayResult(result) {
    document.getElementById("calculation-result").textContent = result;
}

// Function to get input values from the HTML form
function getInputValues() {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    return {number1, number2};
}

// Event listeners for the calculator buttons
document.getElementById("add").addEventListener("click", function() {
    const {number1, number2} = getInputValues();
    displayResult(add(number1, number2));
});

// Event listeners for the calculator buttons
document.getElementById("subtract").addEventListener("click", function() {
    const {number1, number2} = getInputValues();
    displayResult(subtract(number1, number2));
});

// Event listeners for the calculator buttons
document.getElementById("multiply").addEventListener("click", function() {
    const {number1, number2} = getInputValues();
    displayResult(multiply(number1, number2));
});

// Event listeners for the calculator buttons
document.getElementById("divide").addEventListener("click", function() {
    const {number1, number2} = getInputValues();
    displayResult(divide(number1, number2));
});

