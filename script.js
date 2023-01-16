


function RandomNum(min, max){

    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function GetComputerChoice(CPU_choice){
    
    CPU_choice = RandomNum(1, 3);
    
    if(CPU_choice == 1){
        console.log("Computer choose Rock!!")
        CPU_choice = "Rock";
        return CPU_choice;   
    }
    
    else if(CPU_choice == 2){
        console.log("computer choose Paper!!")
        CPU_choice = "Paper";
        return CPU_choice;   
    }

    else if(CPU_choice == 3){
        console.log("computer choose Scissors!!")
        CPU_choice = "Scissors";
        return CPU_choice;  
    }

    
}
GetComputerChoice();