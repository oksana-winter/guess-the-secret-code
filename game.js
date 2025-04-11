
function generateSecretCode() {
  let secretCode = "";
  for (let i = 0; i < 3; i++) {
    secretCode += Math.floor(Math.random() * 10);
  }
  return secretCode;
}

function getFeedback(secretCode, guess) {
  let correctPosition = 0;
  let correctDigitWrongPosition = 0;

  let secretArray = secretCode.split("");
  let guessArray = guess.split("");

  for (let i = 0; i < 3; i++) {
    if (secretArray[i] === guessArray[i]) {
      correctPosition++;
      secretArray[i] = null; 
      guessArray[i] = null; 
    }
  }

  for (let i = 0; i < 3; i++) {
    if (guessArray[i] !== null && secretArray.includes(guessArray[i])) {
      correctDigitWrongPosition++;
      secretArray[secretArray.indexOf(guessArray[i])] = null; 
    }
  }

  return { correctPosition, correctDigitWrongPosition };
}


function startGame() {
  const secretCode = generateSecretCode(); 
  let attempts = 0;
  const maxAttempts = 10;

  alert("Welcome to 'Guess the Secret Code'! Try to guess the 3-digit code. You have only 10 attempts.");


  while (attempts < maxAttempts) {
    let guess = prompt(
      `Attempt ${attempts + 1} of ${maxAttempts}. Enter your 3-digit guess:`
    );

    if (!/^\d{3}$/.test(guess)) {
      alert("Invalid input! Please enter exactly 3 digits.");
      continue;
    }

    const { correctPosition, correctDigitWrongPosition } = getFeedback(
      secretCode,
      guess
    );

    alert(`Correct digits in the correct place: ${correctPosition}`);
    alert(`Correct digits in the wrong place: ${correctDigitWrongPosition}`);

    if (correctPosition === 3) {
      alert("Congratulations! You guessed the secret code!");
      return;
    }

    attempts++;

    if (attempts === maxAttempts) {
      alert(
        `Sorry, you've run out of attempts! The secret code was ${secretCode}.`
      );
    }
  }
}
startGame();

alert("Please enter some text or numbers!");