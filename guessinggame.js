let guessAmount = 0;
let gameAmount = 0;
let guess = undefined;
let averageGuesses = 0;
function guessinggame(){
    let tempGuess = 0;
    let bot = Math.round(Math.random()*100) + 1
    while(guess !== bot){
    if(guess == undefined){
            guess = Number(prompt("Pick a number 1-100"))
            guessAmount = guessAmount + 1;
            tempguess = tempGuess + 1;
            console.log(typeof(guess))}
     else if (guess > bot){
        guess = Number(prompt("Too large. Guess again!"))
        guessAmount = guessAmount + 1;}
         tempguess = tempGuess + 1;
     else{
        guess = Number(prompt("Too small. Guess again!"))
        guessAmount = guessAmount + 1;
         tempguess = tempGuess + 1;
        console.log(guess)}
    }
gameAmount = gameAmount + 1;
averageGuesses = guessAmount / gameAmount
alert(`good job! the number was ${bot}`)
alert(`It took you ${tempGuess} guesses!`)
alert(`Your average amount of guesses to get the number is ${averageGuesses}`)
guess = undefined;
if(confirm("Play again?") == true){
alert(`Game ${gameAmount + 1}`)
guessinggame()
}}
guessinggame()