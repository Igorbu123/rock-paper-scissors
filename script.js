
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
const cpuScore = document.querySelector('.cpuScore');
const cpuCounter = document.querySelector('.cpuCounter');
const playerCounter = document.querySelector('.playerCounter');
const playerScore = document.querySelector('playerScore');
const notificationScreen = document.querySelector('.notificationScreen');
const notificationTextBig = document.querySelector('.notificationTextBig');
const notificationTextSmall = document.querySelector('.notificationTextSmall')
const notificationWinnerText = document.querySelector('.notificationWinnerText');
const notificationPlayAgain = document.querySelector('.notificationPlayAgain');







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
        notificationTextBig.textContent = "Computer chose rock!!";
        CPU_choice_adjusted = "rock";
        return CPU_choice_adjusted;   
    }
    
    else if(CPU_choice == 2){
        notificationTextBig.textContent = "Computer chose papper!!";
        CPU_choice_adjusted = "papper";
        return CPU_choice_adjusted;   
    }

    else if(CPU_choice == 3){
        notificationTextBig.textContent = "Computer chose scissors!!"
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
        
        PlayRound();
        
        cpuCounter.textContent = CPU_counter;
        playerCounter.textContent = PlayerCounter;

        if(PlayerCounter == 5){
            notificationWinnerText.textContent = "YOU WIN THE GAME GG EZ";
            notificationPlayAgain.textContent = "press any option to play again"
            notificationTextBig.textContent = " ";
            notificationTextSmall.textContent = " ";
            PlayerCounter = 0;
            CPU_counter = 0;
        }
            else if(CPU_counter == 5){
                notificationWinnerText.textContent = "YOU DIED GIT GUD SCRUB";
                notificationPlayAgain.textContent = "press any option to try again"
                notificationTextBig.textContent = " ";
                notificationTextSmall.textContent = " ";
                PlayerCounter = 0;
                CPU_counter = 0;
            }  
    });
    


    btn_papper.addEventListener('click', () =>{
        
        choice_adjusted = "papper";
        
        PlayRound();

        cpuCounter.textContent = CPU_counter;
        playerCounter.textContent = PlayerCounter;

        if(PlayerCounter == 5){
            notificationWinnerText.textContent = "YOU WIN THE GAME GG EZ";
            notificationPlayAgain.textContent = "press any option to play again";
            notificationTextBig.textContent = " ";
            notificationTextSmall.textContent = " ";
            PlayerCounter = 0;
            CPU_counter = 0;
        }
            else if(CPU_counter == 5){
                notificationWinnerText.textContent = "YOU DIED GIT GUD SCRUB";
                notificationPlayAgain.textContent = "press any option to try again";
                notificationTextBig.textContent = " ";
                notificationTextSmall.textContent = " ";
                PlayerCounter = 0;
                CPU_counter = 0;
            }

    });
    


    btn_scissors.addEventListener('click', () =>{

        choice_adjusted = "scissors";
        
        PlayRound();

        cpuCounter.textContent = CPU_counter;
        playerCounter.textContent = PlayerCounter;

        if(PlayerCounter == 5){
            notificationWinnerText.textContent = "YOU WIN THE GAME GG EZ";
            notificationPlayAgain.textContent = "press any option to play again";
            notificationTextBig.textContent = " ";
            notificationTextSmall.textContent = " ";
            
            PlayerCounter = 0;
            CPU_counter = 0;
        }
            else if(CPU_counter == 5){
                notificationWinnerText.textContent = "YOU DIED GIT GUD SCRUB";
                notificationPlayAgain.textContent = "press any option to try again";
                notificationTextBig.textContent = " ";
                notificationTextSmall.textContent = " ";
               
                PlayerCounter = 0;
                CPU_counter = 0;
            }
        });   
        
}

//console.log(choice_adjusted);





//Plays a round of the game//

function PlayRound(cpupick,playerpick){

    


    GetComputerChoice();

    notificationWinnerText.textContent = " ";
    notificationPlayAgain.textContent = " ";

   


    while(CPU_counter < 5 || PlayerCounter < 5){

            console.log(CPU_counter);
            console.log(PlayerCounter);
            
    
        if(CPU_choice_adjusted == "rock" && choice_adjusted == "rock"){
            notificationTextSmall.textContent = "It's a DRAW";
            return 0;
        }   
        else if(CPU_choice_adjusted == "rock" && choice_adjusted == "scissors"){
            notificationTextSmall.textContent = "YOU LOSE!!";
            return CPU_counter++;
        }
        else if(CPU_choice_adjusted == "rock" && choice_adjusted == "papper"){
            notificationTextSmall.textContent = "YOU WIN!!";
            return PlayerCounter++;
        }
    
    
        else if(CPU_choice_adjusted == "papper" && choice_adjusted == "papper"){
            notificationTextSmall.textContent = "I'ts a DRAW";
            return 0;
        }
        else if(CPU_choice_adjusted == "papper" && choice_adjusted == "rock"){
            notificationTextSmall.textContent = "YOU LOSE!!";
            return CPU_counter++;
        }
        else if(CPU_choice_adjusted == "papper" && choice_adjusted == "scissors"){
            notificationTextSmall.textContent = "YOU WIN!!";
            return PlayerCounter++;
        }


        else if(CPU_choice_adjusted == "scissors" && choice_adjusted == "scissors"){
            notificationTextSmall.textContent = "I'ts a DRAW"
            return 0;
        }
        else if(CPU_choice_adjusted == "scissors" && choice_adjusted == "papper"){
            notificationTextSmall.textContent = "YOU LOSE!!";
            return CPU_counter++;
        }
        else if(CPU_choice_adjusted == "scissors" && choice_adjusted == "rock"){
            notificationTextSmall.textContent = "YOU WIN!!";
            return PlayerCounter++;
        }   
    }
}
   


PlayerSelection();





//PlayRound();
//console.log(choice_adjusted);
//GetComputerChoice();
//PlayerSelection();
