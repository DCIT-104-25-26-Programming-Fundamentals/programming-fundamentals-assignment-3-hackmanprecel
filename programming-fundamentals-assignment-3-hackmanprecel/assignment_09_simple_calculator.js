// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// TASK: Console-Based Simple Calculator
// =============================================================================

const readlineSync = require("readline-sync");

// -----------------------------------------------------------------------------
// 1. ADDITION
// -----------------------------------------------------------------------------

function add(a, b) {
    return a + b;
}

// -----------------------------------------------------------------------------
// 2. SUBTRACTION
// -----------------------------------------------------------------------------

function subtract(a, b) {
    return a - b;
}

// -----------------------------------------------------------------------------
// 3. MULTIPLICATION
// -----------------------------------------------------------------------------

function multiply(a, b) {
    return a * b;
}

// -----------------------------------------------------------------------------
// 4. DIVISION
// -----------------------------------------------------------------------------

function divide(a, b) {
    if (b === 0) {
        return null;
    }

    return a / b;
}

// -----------------------------------------------------------------------------
// 5. MODULUS
// -----------------------------------------------------------------------------

function modulus(a, b) {
    return a % b;
}

// -----------------------------------------------------------------------------
// 6. EXPONENTIATION
// -----------------------------------------------------------------------------

function exponent(a, b) {
    return a ** b;
}

// -----------------------------------------------------------------------------
// DISPLAY MENU
// -----------------------------------------------------------------------------

function displayMenu() {
    console.log("\n============================");
    console.log("       SIMPLE CALCULATOR");
    console.log("============================");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modulus");
    console.log("6. Exponentiation");
    console.log("7. Quit");
}

// -----------------------------------------------------------------------------
// MAIN PROGRAM
// -----------------------------------------------------------------------------

let running = true;

while (running) {

    displayMenu();

    let choice = readlineSync.question("Select an operation (1-7): ");

    if (choice === "7") {
        console.log("Goodbye!");
        running = false;
    }

    else if (
        choice === "1" ||
        choice === "2" ||
        choice === "3" ||
        choice === "4" ||
        choice === "5" ||
        choice === "6"
    ) {

        let firstNumber = readlineSync.questionFloat(
            "Enter first number: "
        );

        let secondNumber = readlineSync.questionFloat(
            "Enter second number: "
        );

        let result;
        let symbol;

        switch (choice) {

            case "1":
                result = add(firstNumber, secondNumber);
                symbol = "+";
                break;

            case "2":
                result = subtract(firstNumber, secondNumber);
                symbol = "-";
                break;

            case "3":
                result = multiply(firstNumber, secondNumber);
                symbol = "*";
                break;

            case "4":
                result = divide(firstNumber, secondNumber);
                symbol = "/";
                break;

            case "5":
                result = modulus(firstNumber, secondNumber);
                symbol = "%";
                break;

            case "6":
                result = exponent(firstNumber, secondNumber);
                symbol = "**";
                break;
        }


        // Check division by zero
        if (result === null) {
            console.log("Error: Cannot divide by zero.");
        } 
        else {
            console.log(
                `Result: ${firstNumber} ${symbol} ${secondNumber} = ${result.toFixed(2)}`
            );
        }

    }

    else {
        console.log("Error: Invalid choice. Please select between 1 and 7.");
    }
}