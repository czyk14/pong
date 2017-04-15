
$(document).ready(function(){
	var w = $('#ball').width();
	$('#ball').height(w);
	var h = $('#ball').height();
	var pagecenterW = w/24;
	var pagecenterH = h/2;
 	$("#ball").css("maring-top", -pagecenterH);
// 	$("#ball").css("margin-left", -pagecenterW);
});


var ball = {

}

var goalColor;
function setGoalColor(color){
	goalColor=color;
}

function getGoalColor(){
	return goalColor;
}

function change(time){
	//var color = getGoalColor();
	if(time % 2 == 0){
		$(".flash").css("border-color", "white");
		$("#scoreTitle").css("background", "white");
		$("#centerLine").css("background", "white");
		$(".flash").css("box-shadow", " 3px 3px 5px red, -3px 3px 5px red, -3px -3px 5px red, 3px -3px 5px red");
		
			
	}
	else{
		$(".flash").css("border-color", "red");
		$("#scoreTitle").css("background", "red");
		$("#centerLine").css("background", "red");
		$(".flash").css("box-shadow", " 5px 5px 5px white, -5px 5px 5px white, -5px -5px 5px white, 5px -5px 5px white");
	}
}

function reset() {
	$(".flash").css("border-color", "white");
	$("#scoreTitle").css("background", "white");
	$("#centerLine").css("background", "white");
	$(".flash").css("box-shadow", " 0 0 0 transparent");
	
}

function flash() {
	var time = 0;
	var timer = setInterval(function() {
		change(time);
		time++;
		if(time == 50){
		    clearInterval(timer);
		    reset();
		}
	} , 150);	
}

// keydown handler

var interval;
var called = false;

$(document).on('keydown', function(e) {	
    if(interval == null) {
        called = false;
        interval = setInterval(function() {
            doSomething(e.keyCode);
            called = true;
        }, 200);
    }

}).on('keyup', function(e) {
    clearInterval(interval); 
    interval = null;
    if(!called)
        doSomething(e.keyCode);
});

function doSomething(keyCode) {
     var p1 = $("#leftPaddle").position().top;
     var p2 = $("#rightPaddle").position().top;
     switch(keyCode){
		case 87: //p1 up (w)		
			$("#leftPaddle").css("top",(p1-1));
			break;

		case 83: // p1 down (s)
			$("#leftPaddle").css("top",(p1+1));
			break;

		case 38: //p2 up (upArrow)
			$("#rightPaddle").css("top", (p2-1));
			break;

		case 40: // p2 down (downArrow)
			$("#rightPaddle").css("top", (p2+1));
			break;

	}
}
