// ===============================
// MINI ASSIGNMENT PORTAL SCRIPT
// ===============================

// Assignment due date
const dueDate = new Date("2026-05-09T23:59:00");

// Get HTML elements
const submitBtn = document.getElementById("submitBtn");
const statusText = document.getElementById("statusText");
const timerText = document.getElementById("timer");

// ===============================
// CHECK DEADLINE
// ===============================

function checkDeadline() {

    const now = new Date();

    // If assignment is overdue
    if (now > dueDate) {

        submitBtn.disabled = true;

        statusText.textContent = "Submission Closed";
        statusText.style.color = "red";

        timerText.textContent = "Deadline Passed";

    } else {

        // Time remaining
        const difference = dueDate - now;

        const hours = Math.floor(difference / (1000 * 60 * 60));

        const minutes = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
        );

        const seconds = Math.floor(
            (difference % (1000 * 60)) / 1000
        );

        timerText.textContent =
            `Time Left: ${hours}h ${minutes}m ${seconds}s`;

    }

}

// ===============================
// SUBMIT BUTTON
// ===============================

submitBtn.addEventListener("click", () => {

    statusText.textContent =
        "Assignment Submitted Successfully!";

    statusText.style.color = "green";

});

// ===============================
// RUN TIMER
// ===============================

// Run immediately
checkDeadline();

// Update every second
setInterval(checkDeadline, 1000);
