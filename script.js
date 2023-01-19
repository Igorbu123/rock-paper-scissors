
let CPU_choice_adjusted;
let choice_adjusted;
let CPU_counter = 0;
let PlayerCounter = 0;
    
function RandomNum(min, max){

    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const btn_rock = document.querySelector('.btn_rock');
const btn_papper = document.querySelector('.btn_papper');
const btn_scissors = document.querySelector('.btn_scissors');
const table1 = document.querySelector('.table1');
const listElement1 = document.querySelector('.listElement1');


btn_rock.addEventListener('click', () =>{
    
    choice_adjusted = "rock";
    console.log(choice_adjusted);
    
});

btn_papper.addEventListener('click', () =>{

    choice_adjusted = "papper";
    console.log(choice_adjusted);
});

btn_scissors.addEventListener('click', () =>{

    choice_adjusted = "scissors";
    console.log(choice_adjusted);
})



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
    
    

    btn_rock.addEventListener('click', () =>{
    
        choice_adjusted = "rock";
        
        return PlayRound();
        
        
    });
    
    btn_papper.addEventListener('click', () =>{
        
        choice_adjusted = "papper";
        
        PlayRound();
    });
    
    btn_scissors.addEventListener('click', () =>{

        choice_adjusted = "scissors";
        
        PlayRound();

    });  

    
}
PlayerSelection();
//console.log(choice_adjusted);





//Plays a round of the game//

function PlayRound(cpupick,playerpick){

    

    GetComputerChoice();


    if(PlayerCounter == 5){
        console.log("YOU WIN!!!!!!!!!!!!!!!!!!!!")
        PlayerCounter = 0;
        CPU_counter = 0;
    }
        else if(CPU_counter == 5){
            console.log("YOU LOSE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
            PlayerCounter = 0;
            CPU_counter = 0;
        }

    while(CPU_counter < 5 || PlayerCounter < 5){

            console.log(CPU_counter);
            console.log(PlayerCounter);
    
        if(CPU_choice_adjusted == "rock" && choice_adjusted == "rock"){
            console.log("It's a DRAW!!");
            return 0;
        }   
        else if(CPU_choice_adjusted == "rock" && choice_adjusted == "scissors"){
            console.log("You LOSE!!");
            return CPU_counter++;
        }
        else if(CPU_choice_adjusted == "rock" && choice_adjusted == "papper"){
            console.log("You WIN!!");
            return PlayerCounter++;
        }
    
    
        else if(CPU_choice_adjusted == "papper" && choice_adjusted == "papper"){
            console.log("It's a DRAW!!");
            return 0;
        }
        else if(CPU_choice_adjusted == "papper" && choice_adjusted == "rock"){
            console.log("You LOSE!!");
            return CPU_counter++;
        }
        else if(CPU_choice_adjusted == "papper" && choice_adjusted == "scissors"){
            console.log("You WIN!!");
            return PlayerCounter++;
        }


        else if(CPU_choice_adjusted == "scissors" && choice_adjusted == "scissors"){
            console.log("It's a DRAW!!");
            return 0;
        }
        else if(CPU_choice_adjusted == "scissors" && choice_adjusted == "papper"){
            console.log("you LOSE!!");
            return CPU_counter++;
        }
        else if(CPU_choice_adjusted == "scissors" && choice_adjusted == "rock"){
            console.log("You WIN!!");
            return PlayerCounter++;
        }   
    }
}
   








//PlayRound();
//console.log(choice_adjusted);
//GetComputerChoice();
//PlayerSelection();
