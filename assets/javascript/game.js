var wordBank = ["mamma mia", "dancing queen", "fernando", "super trooper", "chiquitita", "waterloo", "sos", "take a chance on me", "voulez vous"]

var guessesLeft = 10;

var wrongGuess = [];
var guessingWord = "";
var Blanks = 0;
var wordLtr = [];
var winNumber = 0;
var lossNumber = 1;
var blanksSuccess = [];

//functions


function startGame() {
    wrongGuess = [];
    guessesLeft = 10;
    blanksSuccess = [];

    guessingWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    chosenLtr = guessingWord.split("");
    Blanks = chosenLtr.length;
    console.log(guessingWord);
    console.log(Blanks);

    for (var i = 0; i < Blanks; i++) {
            blanksSuccess.push("_");
    }
    console.log(blanksSuccess);

    document.getElementById('word-blank').innerHTML = blanksSuccess.join(" ");
    document.getElementById('guesses-left').innerHTML = guessesLeft;


}

function checkLetters(letter) {
    
    var letterInWord = false;

    for(var i = 0; i < Blanks; i++) {
        if(guessingWord[i] === letter) {
            letterInWord = true;
            
        }
    }

    if(letterInWord) {
        for(i = 0; i < Blanks; i++) {
            if(guessingWord[i] === letter) {
                blanksSuccess[i] = letter;
            }
        }
    }
    else {
        guessesLeft --;
        wrongGuess.push(letter);
    }
  

}

function finishGame() {

    document.getElementById("word-blank").innerHTML = blanksSuccess.join(" ");
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    document.getElementById("wrong-guesses").innerHTML = wrongGuess.join(" ");


    if(chosenLtr.join(" ") === blanksSuccess.join(" ")) {
        winNumber++;
        alert("Winner takes it all!!!!  Your word is " + guessingWord);
        document.getElementById("win-counter").innerHTML = winNumber;
        startGame();
    }
    else if(guessesLeft === 0) {
        document.getElementById("loss-counter").innerHTML = lossNumber ++;
        document.getElementById("wrong-guesses").innerHTML = "";
        alert("I'm not taking a chance on you, " + guessingWord + " try again!");
        startGame();
    }
}

startGame();

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed)
    finishGame();
}

    document.getElementById("starter").onclick(resetGame)
    wrongGuesses = [];
    guessesLeft = 10;
    blanksSuccess = [];



