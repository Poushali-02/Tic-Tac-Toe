let input = document.querySelectorAll(".box"); //boxes
let reset = document.querySelector("#reset"); //reset button
let turnO = true;
let message = document.querySelector("#msgBox");//winnning message
let newGBtn = document.querySelector("#newGame");//new game button
let newGameSector = document.querySelector(".New");//new section
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
]

//new Game condition-------------------------------------------

const enabledBoxes = () =>{
    for( let box of input){
        box.disabled = false;
        box.innerText = "";
    }
}

const newGame = () => {
    turnO = true;
    enabledBoxes();
    newGameSector.classList.add("hide");
    newGBtn.classList.add("hideIt");
}
const disabledBoxes = () => {
    for( let box of input){
        box.disabled = true;
    }
}

//Winner Condition------------------------------------------------
newGameSector.classList.add("hide");
newGBtn.classList.add("hideIt");

const showWinner = (winner) => {
    message.innerText = `Congratulations on winnning player ${winner}\nStart New Game`;
    newGameSector.classList.remove("hide");
    newGBtn.classList.remove("hideIt");
    disabledBoxes();
}
const winner = () => {
    for(let pattern of winPattern){
        let val1 = input[pattern[0]].innerText;
        let val2 = input[pattern[1]].innerText;
        let val3 = input[pattern[2]].innerText;
        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 === val2 && val2 === val3){ //winner
                showWinner(val1);
            }
        }
    }
}
input.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turnO){ //player O
            box.innerText = "O";
            turnO = false;
        } else{ //player X
            box.innerText = "X";
            turnO = true;
        } 
        box.disabled = true;
        winner();
    })
});
newGBtn.addEventListener("click", newGame);
reset.addEventListener("click", newGame);