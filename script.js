


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
        CPU_choice = "Rock";
        return CPU_choice;   
    }
    
    else if(CPU_choice == 2){
        console.log("computer choose Papper!!")
        CPU_choice = "Paper";
        return CPU_choice;   
    }

    else if(CPU_choice == 3){
        console.log("computer choose Scissors!!")
        CPU_choice = "Scissors";
        return CPU_choice;  
    }  
}
//GetComputerChoice();



//ASKS FOR AND RETURNS PLAYER SELECTION IN STRING FORMAT

function PlayerSelection(PlayerChoice){
    
    let choice = prompt("Rock, Papper, Scissors")
    let choice_adjusted = choice.toLowerCase();
        
   
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