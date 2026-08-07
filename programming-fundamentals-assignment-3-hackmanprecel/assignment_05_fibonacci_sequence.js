// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
// TASK: Fibonacci Sequence Generator
// =============================================================================

const readlineSync = require('readline-sync');

// -----------------------------------------------------------------------------
// PART A — Print the First N Terms
// -----------------------------------------------------------------------------
function printFibonacciTerms(n) {
    if (n <= 0) {
        console.log("Error: Number of terms must be a positive integer.");
        return;
    }

    let first = 0;
    let second = 1;
    let sequence = "";

    for (let i = 0; i < n; i++) {
        sequence += first + " ";

        let next = first + second;
        first = second;
        second = next;
    }

    console.log("Fibonacci sequence: " + sequence.trim());
}

// -----------------------------------------------------------------------------
// PART B — Check if a Number Belongs to the Fibonacci Sequence
// -----------------------------------------------------------------------------
function isFibonacci(number) {
    // Fibonacci numbers are non-negative
    if (number < 0) {
        return false;
    }

    let first = 0;
    let second = 1;

    // Check the sequence using a loop
    while (first <= number) {
        if (first === number) {
            return true;
        }

        let next = first + second;
        first = second;
        second = next;
    }

    return false;
}

// -----------------------------------------------------------------------------
// MAIN FUNCTION
// -----------------------------------------------------------------------------
function main() {

    // =========================================================================
    // PART A
    // =========================================================================

    const n = readlineSync.questionInt("How many terms? ");

    printFibonacciTerms(n);

    // =========================================================================
    // PART B
    // =========================================================================

    const number = readlineSync.questionInt("Enter a number to check: ");

    if (isFibonacci(number)) {
        console.log(number + " is a Fibonacci number.");
    } else {
        console.log(number + " is NOT a Fibonacci number.");
    }
}

// Run the program
main();