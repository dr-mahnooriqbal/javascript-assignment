var zakatPercentage = 0.025;

var userInput = +prompt("Please enter your income:");

if (isNaN(userInput)) {
  alert("Invalid input! Please enter a valid number.");
} else {

var result = zakatPercentage * userInput;

  alert(`Your zakat value is ${result}`);
}
