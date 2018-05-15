/*
GAME FUNCTION
- Player must guess a number between a min and a max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if player loses
- Let playr choose to play again

*/

//Game values

let min = 1,
    max = 10,
    guessesLeft = 3;
    
let winningNum = Math.ceil(Math.random()*10);

let gameIsOver = false;

//UI elements
const gameWrapper = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');    
        
//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//---Event listeners---

//Listen for guess 
//on clicks
guessBtn.addEventListener('click', function(){
    if(gameIsOver === false){
        playGame(); 
    } else {
        winningNum = Math.ceil(Math.random()*10);
        console.log(winningNum); 
        playAgain();
    }
});

//and enter
guessInput.addEventListener('keypress', function(e){
    if(e.keyCode == 13){
        playGame();
    }
});

console.log(winningNum);


function playGame(){
    let guess = parseInt(guessInput.value);

    //Validate 
    if(isNaN(guess) || guess < min || guess > max){
        guessInput.value = ''; //clear input        
        setMessage(`Please choose a number between ${min} and ${max}`, 'red');
    } else {
        //Check if it's the winning number
        if(guess === winningNum){
            gameOver(true); //win the game            
        } else {
            //Subtract guesses left
            guessesLeft -= 1; 

            //checks how many guesses left
            if(guessesLeft === 0){
                gameOver(false); //lose the game
            } else {
                //wrong - keep on trying
                guessInput.style.borderColor = 'orange';
                guessInput.value = ''; //clear input
                setMessage(`Wrong guess, try again. You have ${guessesLeft} guesses left.`, 'red');        
            }
        }
    }
}

//Game over - win or lose
function gameOver(win){
    //Disable input
    gameIsOver = true; 
    guessInput.disabled = true;
    guessBtn.value = 'Play Again';

    if(win === true){
        guessInput.style.borderColor = 'green';
        setMessage(`Gratulieren!!! The number ${winningNum} is the correct number.`, 'green');
    } else {
        guessInput.style.borderColor = 'red';
        setMessage(`You LOST. The correct number was ${winningNum}` , 'red');
    }
}

//Play again function
function playAgain(){
    //console.log('Player wants to play agin');
    gameIsOver = false;
    guessesLeft = 3;
    guessInput.value = ''; //clear input
    message.textContent = '';
    guessInput.style.borderColor = '#D1D1D1';
    guessInput.disabled = false;    
}

//Set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}
