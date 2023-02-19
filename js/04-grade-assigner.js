let score = parseInt(prompt("Enter a number between 1 and 100"));
if (score >= 1 && score <= 100) {
    switch (true) {
        case (score >= 90):
            console.log("You received an A");
            break;
        case (score >= 80):
            console.log("You received an B");
            break;
        case (score >= 70):
            console.log("You received an C");
            break;
        case (score >= 60):
            console.log("You received an D");
            break;
        default:
            console.log("You received an F")
    } 
}  else {
    alert("Only numbers between 1 and 100 are accepted.")
}