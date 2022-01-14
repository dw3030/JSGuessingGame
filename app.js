let maximum = parseInt(prompt("Enter the max number (greater than 0)!"));
while (!maximum) {
  maximum = parseInt(prompt("PLEASE enter a VALID number first!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

let guess = prompt("Enter your first guess! (Press q to quit at any time)");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  attempts++;
  if (guess > targetNum) {
    guess = prompt("Too high!  Enter a new guess: ");
  } else if (guess < targetNum) {
    guess = prompt("Too low!  Enter a new guess: ");
  } else {
    guess = prompt(
      `Your guess is ${guess}, which is not higher nor lower, please guess again`
    );
  }
}
if (guess === "q") {
  console.log("OK, YOU QUIT!");
} else {
  console.log("CONGRATS, YOU WIN!");
  console.log(`You got it!  It took you ${attempts} guesses.`);
  alert(
    `You got it!! The correct answer was ${targetNum}!\nIt took you ${attempts} guesses.`
  );
  5;
}
