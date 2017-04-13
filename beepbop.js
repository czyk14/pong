
$(document).ready(function(){
	var w = $('#ball').width();
	$('#ball').height(w);
	var h = $('#ball').height();
	var pagecenterW = w/24;
	var pagecenterH = h/2;
 	$("#ball").css("margin-top", -pagecenterH);
 	$("#ball").css("margin-left", -pagecenterW);
});


var ball = {

}

// keydown handler
$(document).keydown(function(e){

	switch(e.keyCode){

		case 87: //p1 up (w)
			var t = $("#leftPaddle").top();
			var b = $("#leftPaddle").bottom();
			$("#leftPaddle").top(t-1);
			$("#leftPaddle").bottom(b+1);

			break;

		case 83: // p1 down (s)
			var t = $("#leftPaddle").top();
			var b = $("#leftPaddle").bottom();
			$("#leftPaddle").top(t+1);
			$("#leftPaddle").bottom(b-1);

			break;

		case 38: //p2 up (upArrow)
			var t = $("#rightPaddle").top();
			var b = $("#rightPaddle").bottom();
			$("#rightPaddle").top(t-1);
			$("#rightPaddle").bottom(b+1);
			break;

		case 40: // p2 down (downArrow)
			var t = $("#rightPaddle").top();
			var b = $("#rightPaddle").bottom();
			$("#rightPaddle").top(t+1);
			$("#rightPaddle").bottom(b-1);
			break;

	}
});
