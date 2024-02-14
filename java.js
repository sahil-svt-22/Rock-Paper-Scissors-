let useboad = 0;
let compboad =0 ;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg')
const useboad_p = document.querySelector('#useboad');
const compboad_p = document.querySelector('#compboad') ;

const  gencompchoice =() =>{
    const options = ["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}
const DRAWGAME=()=>{
    console.log("The game was 'DRAW'");
    msg.innerText = "Ohh!! GAME DRAW";
    msg.style. backgroundColor = "yellow";
}

const showwin = (useWin)=>{
    if(useWin){
        console.log("Yeahhhhh!!! YOU WON");
        useboad++;
        useboad_p.innerText = useboad;
        msg.innerText = "Yeahhhhh!!! YOU WON";
        msg.style. backgroundColor = "GREEN";
    } else{
        console.log("Uhhhh!!!, BETTER LUCK NEXT-TIME")
        msg.innerText = "BETTER LUCK NEXT-TIME";
        msg.style. backgroundColor = "Red";
        compboad++;
        compboad_p.innerText = compboad;
    }

}

const playgame = (usechoice)=>{
    console.log("playe choice = ",usechoice);
    const compchoice = gencompchoice();
    console.log("comp choice = ",compchoice);

    if (compchoice === usechoice){
        DRAWGAME();
    } else {
        let useWin = true;
        if(usechoice === "rock"){
            useWin = compchoice === "paper" ? false : true;
        }
        else if(usechoice === ""){
            useWin = compchoice === "scissor" ? false : true;
        }
        else{
           useWin = compchoice === "rock" ? false:true;
        }
        showwin(useWin);
      }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const usechoice = choice.getAttribute("id");
        playgame(usechoice);
    });
 });


