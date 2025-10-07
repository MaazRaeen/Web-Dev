var buttonColors= ["red", "blue", "green", "yellow"];
var gamePattern=[];
function nextSequence(){
    var randomNumber=Math.random();
    randomNumber=Math.floor(randomNumber*3)+1;

    var randomChosenNumber=buttonColors[randomNumber];
    gamePattern.push(randomChosenNumber);
}
nextSequence();
