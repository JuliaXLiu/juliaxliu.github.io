document.getElementById("btn").addEventListener("click", RollDice);

function RollDice(){
    let result1 = Math.floor(Math.random() * 6 ) + 1;
    let result2 = Math.floor(Math.random() * 6 ) + 1;
    let dices = document.getElementsByClassName("dice");
    dices[0].childNodes[1].src = `dice-${result1}.svg`;
    dices[1].childNodes[1].src = `dice-${result2}.svg`;
    let result = result1+result2;
    document.getElementById("total").innerText = result;
    if(result>=8){
        document.getElementById("message").innerText = "You win: Try Again!";
    }else{
        document.getElementById("message").innerText = "You didn't win: Try Again!";
    }
    
}


function CorrectDigit(num){
    if(num / 10 < 1){
        return "0".concat(num.toString());
    }else{
        return num.toString();
    }
}

function TimeUpdate(){
    let date = new Date();
    let year = date.getFullYear();
    let month = CorrectDigit(date.getMonth());
    let day = CorrectDigit(date.getDate());
    let hour = CorrectDigit(date.getHours());
    let minute = CorrectDigit(date.getMinutes());
    document.getElementById('day').innerHTML =
        `${day}/${month}/${year} at ${hour}:${minute}`;

    setInterval(TimeUpdate, 1000);
}


TimeUpdate();