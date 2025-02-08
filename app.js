let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newgame = document.querySelector("#newbtn");
let msg = document.querySelector("#winmsg");
let msgshow = document.querySelector(".msgshow");

let turn0 = true;

const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () => {
    turn0 = true;
    enableBox();
    msgshow.classList.add("hide");
};

boxes.forEach((box)=> {
    box.addEventListener("click", () => {
        console.log("button is clicked");
        if (turn0) {
            box.innerText = ("O");
            turn0 = false;
        }
        else{
            box.innerText= ("X");
            turn0 = true;  
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `congratulations winner is ${winner}`;
    msgshow.classList.remove("hide");
    disableBox();
};

const checkWinner = () => {
    for(let pattern of winpattern) {
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if (posval1 != "" && posval2 != "" && posval3 != ""){
            if (posval1 === posval2 && posval2 === posval3){
                console.log("winner",posval1);
                showWinner(posval1);
            }
        }
    };
}

newgame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
