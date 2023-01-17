
let CPU_choice_adjusted;
let choice_adjusted;
    
function RandomNum(min, max){

    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}






//RANDOM GENERATOR FOR COMPUTER SELECTION//

function GetComputerChoice(CPU_choice){  
    
    CPU_choice = RandomNum(1, 3);
    
    if(CPU_choice == 1){
        console.log("Computer choose Rock!!")
        CPU_choice_adjusted = "rock";
        return CPU_choice_adjusted;   
    }
    
    else if(CPU_choice == 2){
        console.log("computer choose Papper!!")
        CPU_choice_adjusted = "papper";
        return CPU_choice_adjusted;   
    }

    else if(CPU_choice == 3){
        console.log("computer choose Scissors!!")
        CPU_choice_adjusted = "scissors";
        return CPU_choice_adjusted;  
    }  
}
//GetComputerChoice();
//console.log(CPU_choice_adjusted);






//ASKS FOR AND RETURNS PLAYER SELECTION IN STRING FORMAT//

function PlayerSelection(PlayerChoice){
    
    let choice = prompt("Rock, Papper, Scissors")
    choice_adjusted = choice.toLowerCase();
        
   
    if(choice_adjusted == "rock"){
    console.log("You chose Rock!!");
    return choice_adjusted;
    }

    else if(choice_adjusted == "papper"){
    console.log("You chose Papper!!");
    return choice_adjusted;
    } 

    else if(choice_adjusted == "scissors"){
    console.log("You chose Scissors!!")
    return choice_adjusted;
    }

    else if(choice_adjusted != "rock" || "papper" || "scissors"){
    console.log("Please input valid input");
    }
}
//PlayerSelection();
//console.log(choice_adjusted);





//Plays a round of the game//

function PlayRound(cpupick,playerpick){

    PlayerSelection();
    GetComputerChoice();


    if(CPU_choice_adjusted == "rock" && choice_adjusted == "rock"){
        console.log("It's a DRAW!!");
    }   
    else if(CPU_choice_adjusted == "rock" && choice_adjusted == "scissors"){
        console.log("You LOSE!!");
    }
    else if(CPU_choice_adjusted == "rock" && choice_adjusted == "papper"){
        console.log("You WIN!!");
    }
    
    
    else if(CPU_choice_adjusted == "papper" && choice_adjusted == "papper"){
        console.log("It's a DRAW!!");
    }
    else if(CPU_choice_adjusted == "papper" && choice_adjusted == "rock"){
        console.log("You LOSE!!");
    }
    else if(CPU_choice_adjusted == "papper" && choice_adjusted == "scissors"){
        console.log("You WIN!!");
    }


    else if(CPU_choice_adjusted == "scissors" && choice_adjusted == "scissors"){
        console.log("It's a DRAW!!");
    }
    else if(CPU_choice_adjusted == "scissors" && choice_adjusted == "papper"){
        console.log("you LOSE!!");
    }
    else if(CPU_choice_adjusted == "scissors" && choice_adjusted == "rock"){
        console.log("You WIN!!");
    }
}





PlayRound();
//console.log(choice_adjusted);
//GetComputerChoice();
//PlayerSelection();
