let boxes=document.querySelectorAll(".box")
let reset=document.querySelector("#reset")
let winner=document.querySelector(".winner")


//track turn
let turnO=true;

//winning patterns:
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetGame=()=>{
    turnO=true
}
reset.addEventListener("click",()=>{
    resetGame()
    enableBoxes()

    
})


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if (turnO==true) {
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
})

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
   
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
        winner.innerText=""
    }
}
const checkWinner=()=>{
    for(let pattern of winpattern){
        let pos1Val1=boxes[pattern[0]].innerText;
        let pos1Val2=boxes[pattern[1]].innerText;
        let pos1Val3=boxes[pattern[2]].innerText;

        //check only if all 3 pos r not empty
        if(pos1Val1!=""&&pos1Val3!=""&&pos1Val2!=""){
            if (pos1Val1==pos1Val2&&pos1Val2==pos1Val3) {
                //winner found
                console.log("winner: ",pos1Val1);
               if (pos1Val1=="X") {
                winner.innerText="X won"
                disableBoxes();
                
               }else if (pos1Val1=="O"){
                winner.innerText="O won"
                disableBoxes();

               }
            }
        }
        


    }
}

