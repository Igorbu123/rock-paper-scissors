
function RandomNum(min, max){

    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function GetComputerChoice(num){

}

console.log(RandomNum(1, 3));