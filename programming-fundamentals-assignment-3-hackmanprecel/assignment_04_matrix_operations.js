// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
// TASK: Matrix Operations
// =============================================================================

const readlineSync = require('readline-sync');

// -----------------------------------------------------------------------------
// Function to read a matrix from the user
// -----------------------------------------------------------------------------
function readMatrix(rows, columns) {
    const matrix = [];

    for (let i = 0; i < rows; i++) {
        let row;

        while (true) {
            const input = readlineSync.question(`Enter row ${i + 1}: `);
            row = input.split(" ").map(Number);

            if (row.length === columns && row.every(Number.isFinite)) {
                break;
            }

            console.log(`Error: Please enter exactly ${columns} numbers.`);
        }

        matrix.push(row);
    }

    return matrix;
}

// -----------------------------------------------------------------------------
// Function to display a matrix
// -----------------------------------------------------------------------------
function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = "";

        for (let j = 0; j < matrix[i].length; j++) {
            row += matrix[i][j] + "\t";
        }

        console.log(row);
    }
}

// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
function transposeMatrix(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    const transpose = [];

    for (let j = 0; j < columns; j++) {
        const newRow = [];

        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }

        transpose.push(newRow);
    }

    return transpose;
}

// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
function addMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    const columns = matrixA[0].length;
    const result = [];

    for (let i = 0; i < rows; i++) {
        const row = [];

        for (let j = 0; j < columns; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }

        result.push(row);
    }

    return result;
}

// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const columnsA = matrixA[0].length;
    const columnsB = matrixB[0].length;

    const result = [];

    for (let i = 0; i < rowsA; i++) {
        const row = [];

        for (let j = 0; j < columnsB; j++) {
            let sum = 0;

            for (let k = 0; k < columnsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }

            row.push(sum);
        }

        result.push(row);
    }

    return result;
}

// -----------------------------------------------------------------------------
// MAIN FUNCTION
// -----------------------------------------------------------------------------
function main() {

    // =========================================================================
    // PART A — Transpose
    // =========================================================================

    console.log("\n===== PART A: TRANSPOSE MATRIX =====");

    const rowsA = readlineSync.questionInt("Enter number of rows: ");
    const columnsA = readlineSync.questionInt("Enter number of columns: ");

    if (rowsA <= 0 || columnsA <= 0) {
        console.log("Error: Rows and columns must be positive numbers.");
        return;
    }

    console.log("\nEnter the matrix:");
    const matrixA = readMatrix(rowsA, columnsA);

    console.log("\nOriginal Matrix:");
    displayMatrix(matrixA);

    const transpose = transposeMatrix(matrixA);

    console.log("\nTransposed Matrix:");
    displayMatrix(transpose);


    // =========================================================================
    // PART B — Addition
    // =========================================================================

    console.log("\n===== PART B: ADD TWO MATRICES =====");

    const rowsB = readlineSync.questionInt("Enter number of rows: ");
    const columnsB = readlineSync.questionInt("Enter number of columns: ");

    if (rowsB <= 0 || columnsB <= 0) {
        console.log("Error: Rows and columns must be positive numbers.");
        return;
    }

    console.log("\nEnter Matrix A:");
    const matrixB1 = readMatrix(rowsB, columnsB);

    console.log("\nEnter Matrix B:");
    const matrixB2 = readMatrix(rowsB, columnsB);

    const additionResult = addMatrices(matrixB1, matrixB2);

    console.log("\nMatrix A:");
    displayMatrix(matrixB1);

    console.log("\nMatrix B:");
    displayMatrix(matrixB2);

    console.log("\nA + B:");
    displayMatrix(additionResult);


    // =========================================================================
    // PART C — Matrix Multiplication
    // =========================================================================

    console.log("\n===== PART C: MULTIPLY TWO MATRICES =====");

    const rowsC1 = readlineSync.questionInt("Enter number of rows for Matrix A: ");
    const columnsC1 = readlineSync.questionInt("Enter number of columns for Matrix A: ");

    const rowsC2 = readlineSync.questionInt("Enter number of rows for Matrix B: ");
    const columnsC2 = readlineSync.questionInt("Enter number of columns for Matrix B: ");

    if (rowsC1 <= 0 || columnsC1 <= 0 || rowsC2 <= 0 || columnsC2 <= 0) {
        console.log("Error: Rows and columns must be positive numbers.");
        return;
    }

    // Check multiplication condition
    if (columnsC1 !== rowsC2) {
        console.log(
            "Error: The number of columns in Matrix A must equal the number of rows in Matrix B."
        );
        return;
    }

    console.log("\nEnter Matrix A:");
    const matrixC1 = readMatrix(rowsC1, columnsC1);

    console.log("\nEnter Matrix B:");
    const matrixC2 = readMatrix(rowsC2, columnsC2);

    const multiplicationResult = multiplyMatrices(matrixC1, matrixC2);

    console.log("\nMatrix A:");
    displayMatrix(matrixC1);

    console.log("\nMatrix B:");
    displayMatrix(matrixC2);

    console.log("\nA x B:");
    displayMatrix(multiplicationResult);
}

// Run the program
main();