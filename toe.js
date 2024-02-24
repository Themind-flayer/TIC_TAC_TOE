let boxes= document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgamebtn=document.querySelector("#newgame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnX=true;

winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let count=0;

const resetGame = () => {
    turnX=true;
    count=0;
    enableButtons();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        count++;
        let check=false;
       if(turnX)
       {
        box.innerText="X";
        
        turnX=false;
       }
       else{
        box.innerText="O";
        turnX=true;
       }
       box.disabled=true;

       check=checkWinner();

       if(count===9 && !check)
       {
        drawMatch();
       }
        
    });
});

const disableButtons = () => {
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enableButtons = () => {
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner = (winner) =>{
    msg.innerText=`Congratulations, WINNER is ${winner}`;
    msgContainer.classList.remove("hide");
    disableButtons();
}

const checkWinner = () => {
    for(let pattern of winPatterns)
    {
       let pos1=boxes[pattern[0]].innerText;
       let pos2=boxes[pattern[1]].innerText;
       let pos3=boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "")
        { 
            
            if(pos1===pos2 && pos2===pos3)
            {
                console.log(`The winner is  ${pos1}`);
                showWinner(pos1);
                return true;
            }
            

        }
    }
};
const drawMatch = () => {
    showWinner("--N☹️ 😊NE--");
}

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);




