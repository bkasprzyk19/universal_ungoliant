let userName = prompt('What is your account name?')

function getUserName(){
    if(userName.toLowerCase() == 'admin'){
        document.write('<h2>Welcome Home ' + userName + '</h2>');}
    else {   document.write('<h2>Welcome New User ' + userName + '</h2>');

} 

}

getUserName();


let userGuess = prompt('Please enter a number between 1 and 100.')

function randomNumber(){
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber
}

function getguessingGame(){

   

    correctAnswer = randomNumber();
   console.log(randomNumber);
    guesses = 5;
    for(let i=0; i < guesses; i=i+1) {
        let guessLeft = guesses - i;
        let userGuess = parseInt(prompt('Please enter a number between 1 and 100. You have ' + (guesses - i) + ' guesses left'));
        while(userGuess < 1 || userGuess >100){
        userGuess = parseInt(promt('Try Again: Enter a number between 1 and 100'));}

    }
    if(userGuess == correctAnswer){
        alert('WooHoo! You nailed it!');
        ;}
    
    if(userGuess > correctAnswer){
        alert ('sorry, too high')};
    if(userGuess < correctAnswer){
            alert ('sorry, too low')};
           
            ;
    

      
    

}
getguessingGame();






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


// console.log('Hello World!')

// let userName = promt("What is your name?")
// let userAge = promt("How old are you?")



// if(userName == 'Brian'){
//         document.write('<h2>Welcome ' + userName + '</h2>')}
//         else { document.write('<h2>Not Welcome ' + userName + '</h2>')}


// Data Types

// String: letters or numbers 
// number or integer
// Boolean True or False
// Null 

// let btn = document.createElement("button");
// btn.innerHTML = "Submit";
// btn.type = "submit";
// btn.name = "formBtn";
// document.body.appendChild(btn);

// let userAge = promt("How old are you?")

// let userAnswer = promt("Do you wish to join??")
// if (userAnswer.toLowerCase() == 'yes'){
// document.write('APPLY')}

// today = Date()

// console.log(today)

// function picturesOnPage(){
//         let numberOfPictures = prompt('How many construction cones do you want to see?')
//         for (let i = 0; i > numberOfPictures; i++){
// document.write('<img src="cone1.png"')}


// }

// picturesOnPage()

