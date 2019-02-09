let num = Math.floor((Math.random()*2)+1);
let display = document.getElementById('result')


function checkResult(){
    let guess= parseInt(document.getElementById('number').value);
    let guess2= parseInt(document.getElementById('number2').value);
    
    if(guess==null){
        return;
    }
    else if((guess==2)&&(num==2)){
        display.style.color="#000000";
        display.innerHTML= "Player 1 wins, It's Heads! Reload to play again!";
    }
    else if((guess==1)&&(num==1)){
        display.style.color="#000000";
        display.innerHTML="Player 1 wins, It's Tails! Reload to play again!";
    }
    else if((guess2==2)&&(num==2)){
        display.style.color="#000000";
        display.innerHTML= "Player 2 wins, It's Heads! Reload to play again!";
    }
    else if((guess2==1)&&(num==1)){
        display.style.color="#000000";
        display.innerHTML="Player 2 wins, It's Tails! Reload to play again!";
    }
    else if(guess||guess2 >2){
        display.style.color="#000000";
        display.innerHTML="Read Above to Start";
    }
    else if(guess&&guess2==1){
        display.style.color="#000000";
        display.innerHTML="It's a Tie. Reload to try again!";
    }
    else if(guess&&guess2==2){
        display.style.color="#000000";
        display.innerHTML="It's a Tie. Reload to try again!";
    }
    else if(guess|| guess2 <1){
        display.style.color="#000000";
        display.innerHTML="That's not how this works, try again"
    }
    else{
        display.style.color="#000000";
        display.innerHTML="Sorry, your guess was wrong. Try again!";
    }
    return;
}