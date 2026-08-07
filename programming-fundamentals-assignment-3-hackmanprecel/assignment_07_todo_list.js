// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 7
// TASK: Console-Based To-Do List Application
// =============================================================================

const readlineSync = require("readline-sync");

let tasks = [];

// -----------------------------------------------------------------------------
// ADD A TASK
// -----------------------------------------------------------------------------

function addTask() {
    let task = readlineSync.question("Enter task: ");

    if (task.trim() === "") {
        console.log("Error: Task cannot be empty.");
    } else {
        tasks.push(task);
        console.log(`Task added: "${task}"`);
    }
}

// -----------------------------------------------------------------------------
// VIEW ALL TASKS
// -----------------------------------------------------------------------------

function viewTasks() {
    if (tasks.length === 0) {
        console.log("Your to-do list is empty.");
        return;
    }

    console.log("\nYour Tasks:");

    for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}. ${tasks[i]}`);
    }
}

// -----------------------------------------------------------------------------
// DELETE A TASK
// -----------------------------------------------------------------------------

function deleteTask() {
    if (tasks.length === 0) {
        console.log("There are no tasks to delete.");
        return;
    }

    viewTasks();

    let taskNumber = readlineSync.questionInt(
        "Enter task number to delete: "
    );

    if (taskNumber < 1 || taskNumber > tasks.length) {
        console.log("Error: Invalid task number.");
        return;
    }

    let index = taskNumber - 1;

    let deletedTask = tasks[index];

    tasks.splice(index, 1);

    console.log(`Task "${deletedTask}" has been removed.`);
}

// -----------------------------------------------------------------------------
// DISPLAY MENU
// -----------------------------------------------------------------------------

function displayMenu() {
    console.log("\n============================");
    console.log("       TO-DO LIST MENU");
    console.log("============================");
    console.log("1. Add task");
    console.log("2. View tasks");
    console.log("3. Delete task");
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
        addTask();
    }
    else if (choice === "2") {
        viewTasks();
    }
    else if (choice === "3") {
        deleteTask();
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