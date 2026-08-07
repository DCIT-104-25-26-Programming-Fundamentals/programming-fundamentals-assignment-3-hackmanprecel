// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// TASK: Multiplication Table Generator
// =============================================================================

const readlineSync = require("readline-sync");

// -----------------------------------------------------------------------------
// PART A — Single Table
// -----------------------------------------------------------------------------

function singleTable(number) {
    console.log(`\nMultiplication Table for ${number}:`);

    for (let i = 1; i <= 12; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// -----------------------------------------------------------------------------
// PART B — Tables from 1 to N
// -----------------------------------------------------------------------------

function tablesFromOneToN(n) {
    for (let number = 1; number <= n; number++) {
        console.log(`\nMultiplication Table for ${number}:`);

        for (let i = 1; i <= 12; i++) {
            console.log(`${number} x ${i} = ${number * i}`);
        }

        if (number < n) {
            console.log("---------------------------");
        }
    }
}

// -----------------------------------------------------------------------------
// MAIN PROGRAM
// -----------------------------------------------------------------------------

let n = readlineSync.question("Enter a positive integer: ");

n = Number(n);

if (!Number.isInteger(n) || n <= 0) {
    console.log("Error: Please enter a positive integer.");
} else {
    // Part A
    singleTable(n);

    // Part B
    console.log("\n\nPART B — Tables from 1 to N");
    tablesFromOneToN(n);
}