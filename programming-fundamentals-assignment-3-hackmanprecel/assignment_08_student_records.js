// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// TASK: Student Record Management System
// =============================================================================

const readlineSync = require("readline-sync");

let students = [];

// -----------------------------------------------------------------------------
// ADD A STUDENT
// -----------------------------------------------------------------------------

function addStudent() {
    let name = readlineSync.question("Student name: ");

    let id = readlineSync.questionInt("Student ID: ");

    let numberOfScores = readlineSync.questionInt("How many scores? ");

    let scores = [];

    for (let i = 1; i <= numberOfScores; i++) {
        let score = readlineSync.questionFloat(
            `Enter score ${i}: `
        );

        scores.push(score);
    }

    let student = {
        name: name,
        id: id,
        scores: scores
    };

    students.push(student);

    console.log(`Student "${name}" added successfully.`);
}

// -----------------------------------------------------------------------------
// CALCULATE AVERAGE
// -----------------------------------------------------------------------------

function calculateAverage(scores) {
    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    return total / scores.length;
}

// -----------------------------------------------------------------------------
// DISPLAY ALL STUDENTS
// -----------------------------------------------------------------------------

function displayAllStudents() {
    if (students.length === 0) {
        console.log("No students have been added yet.");
        return;
    }

    console.log("\n================ STUDENT RECORDS ================");

    for (let i = 0; i < students.length; i++) {
        let student = students[i];

        let average = calculateAverage(student.scores);

        console.log(`\nName: ${student.name}`);
        console.log(`ID: ${student.id}`);
        console.log(`Scores: ${student.scores.join(", ")}`);
        console.log(`Average: ${average.toFixed(2)}`);
    }

    console.log("==================================================");
}

// -----------------------------------------------------------------------------
// CALCULATE AVERAGE FOR A SPECIFIC STUDENT
// -----------------------------------------------------------------------------

function calculateStudentAverage() {
    let id = readlineSync.questionInt("Enter student ID: ");

    let foundStudent = null;

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            foundStudent = students[i];
            break;
        }
    }

    if (foundStudent === null) {
        console.log("Error: Student ID not found.");
        return;
    }

    let average = calculateAverage(foundStudent.scores);

    console.log(
        `${foundStudent.name}'s average score: ${average.toFixed(2)}`
    );
}

// -----------------------------------------------------------------------------
// DISPLAY MENU
// -----------------------------------------------------------------------------

function displayMenu() {
    console.log("\n================================");
    console.log("     STUDENT RECORD SYSTEM MENU");
    console.log("================================");
    console.log("1. Add student");
    console.log("2. Display all students");
    console.log("3. Calculate average score");
    console.log("4. Quit");
}

// -----------------------------------------------------------------------------
// MAIN PROGRAM
// -----------------------------------------------------------------------------

let running = true;

while (running) {
    displayMenu();

    let choice = readlineSync.question("Enter your choice (1-4): ");

    if (choice === "1") {
        addStudent();
    }
    else if (choice === "2") {
        displayAllStudents();
    }
    else if (choice === "3") {
        calculateStudentAverage();
    }
    else if (choice === "4") {
        console.log("Goodbye!");
        running = false;
    }
    else {
        console.log(
            "Error: Invalid choice. Please enter a number from 1 to 4."
        );
    }
}