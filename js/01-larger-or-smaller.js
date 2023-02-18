let x = parseInt(prompt("Enter a number"));
let y = parseInt(prompt("Enter a second number"));
if (x > y) {
    document.write(`The larger of the two numbers that you entered is ${x}`);
} else if (y > x) {
    document.write(`The larger of the two numbers that you entered is ${y}`);
} else {
    document.write("You entered the same number");
}