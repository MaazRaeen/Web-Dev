/*$(document).ready(function(){
    $("h1").css("color", "red");
});
this will be needed if we put our link just after CSS path. otherwise just use -> $("h1").css("color", "red");
*/
$("h1").css("color", "purple");
$("h1").addClass("big-title")
$("h1").text("bye");
$("button").text("no now you dont have to click me")
$("button").html("<em>click me</em>")
$("a").attr("href", "https://www.yahoo.com")
$("h1").click(function(){
    $("h1").text("color", "blue")
});
$(document).keypress(function(event){
    $("h1").text(event.key);
});
$("button").on("click",function(){
    $("h1").animate({opacity: 0.5});
})