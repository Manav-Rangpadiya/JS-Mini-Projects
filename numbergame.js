const submit = document.querySelector("#submit")
let userInput = document.querySelector("#guessinput")
const lowOrHigh = document.querySelector(".lowOrHigh")
const resultpara = document.querySelector(".resultpara")
const guessSlot = document.querySelector(".pg")
const remaining = document.querySelector(".ra")
const p = document.createElement('p');

let random = parseInt(Math.random()*100 +1)
console.log(random);

let prevguess = []
let numguess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess (guess) {
    if(isNaN(guess)){
        alert('Enter a valid Number');
    }
    else if (guess > 100){
        alert('Enter number lesser then 100');
    }
    else if ( guess < 0){
        alert('Enter number higer then 0');
    }
    else{
        prevguess.push(guess)
        if(numguess === 11){
            emptyguess(guess)
            displayMsg(`Gameover random number was ${random}`)
            endgame();
        }
        else{
            emptyguess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess (guess) {
    if(guess === random){
        displayMsg(`You guessed it right`)
        endgame()
    }
    else if(guess > random){
        displayMsg(`Guess is too high`)
    }
    else{
        displayMsg(`Guess is too low`)
    }
}

function emptyguess (guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numguess++
    remaining.innerHTML =`${11 - numguess}`
}

function displayMsg (msg) {
    lowOrHigh.innerHTML = `<h2>${msg}</h2>`
}

function endgame (){
    userInput.value = ''
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    resultpara.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      random = parseInt(Math.random() * 100 + 1);
      prevguess = [];
      numguess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numguess} `;
      userInput.removeAttribute('disabled');
      resultpara.removeChild(p);
  
      playGame = true;
    });
  }

