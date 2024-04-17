let n = null; // Variable to store the value of n

// Function to generate a new value for n
let generateN = () => {
    n = Math.random() * 100;
    n = Math.floor(n);
}

// Function to update the result
let updateResult = () => {
    var input = document.getElementById("BN").value;
    var input2 = document.getElementById("GN").value;
    document.getElementById('res').innerHTML = input + " 💕 " + input2 + " Love is " + n + "%";
}

// Function to call when inputs change
let inputChange = () => {
    n = null; // Reset n when input changes
}

// Function to call when button is clicked
let cal = () => {
    if (n === null) {
        generateN(); // Generate a new value for n if it's null
    }
    updateResult(); // Update the result
}

// Adding event listeners to input elements
document.getElementById("BN").addEventListener("input", inputChange);
document.getElementById("GN").addEventListener("input", inputChange);