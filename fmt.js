let box = document.querySelectorAll(".box");
let popup = document.querySelector(".popup");
let cutbtn = document.querySelector(".cut");
let restart = document.querySelector(".restart");
let newgamebtn = document.querySelector(".newgamebtn");
let winnername = document.querySelector("#winnername");
let turnO = true;
box.innerText = "O";

const winpatterns = 
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];

box.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText = "🍒";
            turnO = false;
        }
        else if(turnO === false){
            box.innerText = "🍍"
            turnO = true;
        }

        box.disabled = true;

        checkwinners();
    })
})

let checkwinners = () =>{

    for(pattern of winpatterns){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(box[pattern[0]].innerText, box[pattern[1]].innerText, box[pattern[2]].innerText);

        let posVlu0 = box[pattern[0]].innerText;
        let posVlu1 = box[pattern[1]].innerText;
        let posVlu2 = box[pattern[2]].innerText;

        if(posVlu0 != "" && posVlu1 != "" && posVlu2 != ""){
            if(posVlu0 === posVlu1 && posVlu1 === posVlu2){
                endGame();
                showpopup();
                winnername.innerText = posVlu0;
            }
        }

    }

}

function endGame(){
    for(let boxs of box){
        boxs.disabled = true;
    }
};

const startGame = () => {
    for (let boxs of box) {
        boxs.innerText = "";
        boxs.disabled = false;
    }
};

const newgame = () => {
    turnO = true;
    startGame();
    popup.classList.add("hide"); // also hide popup when restarting
};


function showpopup(){
    popup.classList.remove("hide");
}

cutbtn.addEventListener("click", ()=>{
    popup.classList.add("hide");
})

restart.addEventListener("click", newgame);
newgamebtn.addEventListener("click", newgame);



