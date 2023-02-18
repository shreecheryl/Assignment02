let x = parseInt(prompt("Enter a number"));
let y = parseInt(prompt("Enter a second number"));
if (x > y) {
    document.write(x);
} else if (y < x) {
    document.write(y)
} else {
    document.write("You entered the same number")
}