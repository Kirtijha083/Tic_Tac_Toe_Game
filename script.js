console.log("Welcome to Tic Tac Toe");

let music = new Audio("./assets/music.mp3");
let audioTurn = new Audio("./assets/ting.mp3");
let gameover = new Audio("./assets/gameover.mp3");

let turn = "X";

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// function to check for win
const checkWin = () => {

}

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
           turn = changeTurn();
            audioTurn.play();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    })
})
