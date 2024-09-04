// Initialize count to keep track of the number of people entered
let count = 0;

// Get the paragraph element where the previous entries will be displayed
let saveEl = document.getElementById("save-el");

// Get the heading element where the current count is displayed
let countEl = document.getElementById("count-el");

// Function to increment the count and update the displayed count
function increment() {
    count += 1; // Increase count by 1
    countEl.textContent = count; // Update the displayed count
}

// Function to save the current count, display it in the paragraph, and reset the count
function save() {
    let countStr = count + " - "; // Format the count to be displayed
    saveEl.textContent += countStr; // Append the formatted count to the previous entries
    countEl.textContent = 0; // Reset the displayed count to 0
    count = 0; // Reset the count to 0
}

// Log a message to the console when the page loads
console.log("Let's count people on the subway!");
