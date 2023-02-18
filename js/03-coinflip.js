let coinFlip = Math.round(Math.random() * 10);
let choice = prompt("Heads or Tails?").toLowerCase();
if (coinFlip >= 5) {
    coinFlip = "heads";
} else {
    coinFlip = "tails";
}
if (choice === "heads" && coinFlip === "heads") {
    alert("The flip was heads and you chose heads...you win!");
} else if (choice === "tails" && coinFlip === "heads") {
    alert("The flip was heads but you chose tails...you lose!");
} else if (choice === "heads" && coinFlip === "tails") {
    alert("The flip was tails but you chose heads...you lose!");
} else if (choice === "tails" && coinFlip === "tails") {
    alert("The flip was tails and you chose tails...you win!");
}