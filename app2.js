// function incrementButton() {
//     let element = document.getElementById('incrementText');
//     let value = element.innerHTML ;
//     let num = parseInt(value);

//     num += 1;

//     console.log(nun);
//     document.getElementById('incrementText').innerHTML = nun;


// getUserNumberOneToTen();

// Number Guessing Game
// random number generator
// data type for looking at prompt
// keep running until right number found
// could do a yes or no
// limiting factors: range of solution, number of guesses
//i++

// random number generator
function randomNumber(){
    // found at https://www.w3schools.com/js/js_random.asp
      
    let randNum = Math.floor(Math.random() * 100) + 1;
    return randNum
}

function guessingGame(){

    correctAnswer = randomNumber();
    console.log(randomNumber);
    guesses = 5;
    for(let i=0; i < guesses; i=i+1) {
        let guessLeft = guesses - i;
        let userGuess = parseInt(promt('Please enter a number between 1 and 100. You have' guesses - i ' left'));
        while(userGuess < 1 || userGuess >100){
        userGuess = parseInt(promt('Try Again: Enter a number between 1 and 100'));}

    }
    if(userGuess == correctAnswer){
        alert('WooHoo! You nailed it!');
        break;}
    
        else if(userGuess > correctAnswer){
        alert ('sorry, too high')};
        else if(userGuess < correctAnswer){
            alert ('sorry, too low')};
            else {
                    alert('error')
            };
    }

    }  
    }

}
guessingGame();



