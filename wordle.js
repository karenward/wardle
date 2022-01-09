var words = "";
var word = "";
var wordSplit = [];

var thisGuess = "";
var guessNumber = 0;
var result = [];
const thisColour = ["White","Green","Yellow"]

function startGame(){
    $.get('words.txt', function (data) {
        words = data.split('\r\n');
     }, 'text');
        word = words[Math.floor(Math.random() * 211)];
        wordSplit = word.toString().toLowerCase().split("");
        alert("Go!")
}

function checkGuess(){
    var guessSplit = thisGuess.split("");
    console.log(`Guess = ${thisGuess} Word = ${word}`)
    console.log(guessSplit[2] + wordSplit[2])
    for(let i = 0; i < 5; i++){
        if(guessSplit[i]==wordSplit[i]){
               result[i] = 1   //correct
               console.log("correct")
           }
           else if(word.includes(guessSplit[i])){
               result[i] = 2   //present
           }
           else{
               result[i]= 0
           }
           //document.getElementById(`${guessNumber}-${i}`).innerText=guessSplit[i];
           document.getElementById(`${guessNumber}-${i}`).style.backgroundColor=thisColour[result[i]];
           //console.log(thisColour[result[i]]);           
       } 
       guessNumber++; 
       if(guessNumber>5){alert(word)}
       thisGuess = "";  
       result = [];
}

window.addEventListener("keydown", function(event) {
    const letter = `${event.key}`
    //console.log(letter)
    
    if(thisGuess.length<5){
        thisGuess+=letter
        document.getElementById(`${guessNumber}-${thisGuess.length-1}`).innerText=letter;
    }if(thisGuess.length>=5){
        checkGuess(guessNumber)
    }
    //document.getElementById(`${guessNumber}-${thisGuess.length-1}`).innerText=letter;
    console.log(thisGuess)
  }, true);
