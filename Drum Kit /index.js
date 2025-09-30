var noOfDrums=document.querySelectorAll(".drum").length;
for(i=0;i<noOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
function handleClick(){
    var audio=new Audio('sounds/tom-1.mp3');
    audio.play();
}
}
