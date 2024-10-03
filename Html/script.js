
// Function to calculate the sum of two numbers
function calculateSum() {
    // Get the values from the input fields
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    // Check if numbers are valid
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Please enter valid numbers.";
    } else {
        // Calculate the sum
        let sum = num1 + num2;
        // Display the result in the "result" paragraph
        document.getElementById("result").textContent = "The sum of the two numbers is: " + sum;
    }
}
