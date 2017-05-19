var topleftclicked = false;
var toprightclicked = false;
var bottomleftclicked = false;
var bottomrightclicked = false;

$('#topleft').mouseenter(function(){
  $('.box')[0].style.webkitTransform = "rotateY(-90deg)";
});
$('#topleft').mouseleave(function(){
	if(topleftclicked) {
	} 
	else {
		$('.box')[0].style.webkitTransform = "rotateY(0deg)";
	}
});


$('#topright').mouseenter(function(){
  $('.box')[1].style.webkitTransform = "rotateY(-90deg)";
});
$('#topright').mouseleave(function(){
	if(toprightclicked) {
	} 
	else {
		$('.box')[1].style.webkitTransform = "rotateY(0deg)";
	}
});


$('#bottomleft').mouseenter(function(){
  $('.box')[2].style.webkitTransform = "rotateY(-90deg)";
});
$('#bottomleft').mouseleave(function(){
	if(bottomleftclicked) {
	} 
	else {
		$('.box')[2].style.webkitTransform = "rotateY(0deg)";
	}
});

$('#bottomright').mouseenter(function(){
  $('.box')[3].style.webkitTransform = "rotateY(-90deg)";
});
$('#bottomright').mouseleave(function(){
	if(bottomrightclicked) {
	} 
	else {
		$('.box')[3].style.webkitTransform = "rotateY(0deg)";
	}
});

jQuery(document).ready(function($){
	$('#tl').iframeTracker({
		blurCallback: function(){
			topleftclicked = true;
		}
	});
	$('#bl').iframeTracker({
		blurCallback: function(){
			bottomleftclicked = true;
		}
	});
	$('#tr').iframeTracker({
		blurCallback: function(){
			toprightclicked = true;
		}
	});
	$('#br').iframeTracker({
		blurCallback: function(){
			bottomrightclicked = true;
		}
	});
});