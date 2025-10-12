var buttonColours= ["red", "blue", "green", "yellow"];

var gamePattern=[];
var userClickPattern=[];

$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickPattern.push(userChosenColour);
    //playsound
    playSound(userChosenColour);
    animatePress(userChosenColour);
});
function nextSequence(){
    var randomNumber=Math.random();
    randomNumber=Math.floor(randomNumber*4);

    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);
}

function playSound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
}