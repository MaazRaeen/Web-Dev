
var buttonColors= ["red", "blue", "green", "yellow"];
var GamePattern=[];
function nextSequence(){
    var randomNumber=Math.random();
    randomNumber=Math.floor(randomNumber*3)+1;

    var randomChosenNumber=buttonColors[randomNumber];
    GamePattern.push(randomChosenNumber);
}
nextSequence();
