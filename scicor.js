let userScore = 0;
let compScore = 0;

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genComChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]; 
};

const gameDraw = () => {
    console.log("game is draw");
    msg.innerText = "Game Draw Play Again";
    msg.style.backgroundColor = "#1d3557";
    
};

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win The Game, computer selected",compScore);
        msg.innerText = "You Won The Gamecomputer selected",comChoice;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Lost The Game because computer selected",compScore);
        msg.innerText = "You Lost The Gamebecause computer selected";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice is",userChoice);
    const comChoice = genComChoice();
    console.log("computer choice is",comChoice); 

    if(userChoice === comChoice){
        gameDraw();
    }

    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = comChoice === "paper" ? false : true;
        } 
        else if(userChoice === "paper"){
            userWin = comChoice === "scissor" ? false : true;
        }
        else{
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});