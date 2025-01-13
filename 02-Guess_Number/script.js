const randomNumber = Math.floor(Math.random()*100) +1
let attempt =0
console.log(randomNumber);

function checkGuess(){
    guess = parseInt(document.getElementById("number").value)

    attempt++
    document.getElementById("attempt").innerHTML = attempt

    if (guess === randomNumber) {
        document.getElementById("feedback").innerHTML = `🎉 Correct! The number was ${randomNumber}. You guessed it in ${attempt} attempts.`;
    } else if (guess > randomNumber) {
        document.getElementById("feedback").innerHTML = "📈 Too high! Try again.";
    } else if (guess < randomNumber) {
        document.getElementById("feedback").innerHTML = "📉 Too low! Try again.";
    } else {
        document.getElementById("feedback").innerText = "❓ Invalid input. Please enter a number between 1 and 100.";
    }
}
