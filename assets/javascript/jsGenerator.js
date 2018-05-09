let alpha;
let wins = 0;
let losses = 0;
let guessesLeft = 9;
let guessesSoFar = [];
let randomLetter = "";

function loadAlpha () {
    alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    document.addEventListener("keydown", processGuess)
    resetVars();
}

function resetVars () {
    guessesLeft = 9;
    guessesSoFar = [];
    document.getElementById("guessesSoFar").innerHTML="Your guesses so far:";
    document.getElementById("guessesLeft").innerHTML="Guesses left:9";
    randomLetter = alpha[Math.floor((Math.random() * 26) + 1)];
}

function processGuess(e) {
    if(alpha.indexOf(e.key) < 0){
        alert("Character " + e.key + " is not in the english alphabet. Try again.")
        return;
    }
    if(guessesSoFar.indexOf(e.key.toLowerCase()) > -1) {
        alert("You already quessed that letter. Try again")
        return;
    }

    if(e.key.toLowerCase() === randomLetter) {                
        alert("You guessed correctly");
        resetVars();
        processWinsLosses(e);
        return;
    }
    else {        
        guessesLeft--;
        document.getElementById("guessesLeft").innerHTML = "Guesses left:" + guessesLeft;
        updateGuesses(e.key);
        if(guessesLeft < 1) {
            alert("Sorry! You lost");
            resetVars();
            processWinsLosses(false);
            resetVars();
        }
    }    
}


function updateGuesses(letter) {
    guessesSoFar.push(letter);
    document.getElementById("guessesSoFar").innerHTML = "Your guesses so far:" + guessesSoFar;
}

function  processWinsLosses(gameOutCome) {
    
    if(gameOutCome) {
        wins++;
        document.getElementById("wins").innerHTML = "Wins:" + wins;
    }
    else {
        losses++;
        document.getElementById("losses").innerHTML = "Losses:" + losses;
    }
}
