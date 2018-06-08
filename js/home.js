$(document).on("click", '#contact', function(event) { 
	$('#contactForm').fadeIn("fast");
});

$(document).on("click", '#close-form', function(event) { 
	$('#contactForm').fadeOut("fast");
});

$( document ).ready(function() {
    var height = $( window ).height();
 	var width = $( window ).width();

 	if(width >= 1000){
 		var pad = 855 - (height*1.05);
 		$("#sign-me-up").css("margin-top", pad);
 	}
  	else if(width >= 768){
  		var pad = 764 - (height*1.05);
 		$("#sign-me-up").css("margin-top", pad);
 	}
  	else if(width >= 580){
   		var pad = 665 - (height);
 		$("#sign-me-up").css("margin-top", pad);
 	}
   	else if(width >= 395){
  		var pad = 586 - (height);
 		$("#sign-me-up").css("margin-top", pad);		
 	}
   	else if(width >= 320){
  		var pad = 525 - (height);
 		$("#sign-me-up").css("margin-top", pad);	
 	}
});


$( window ).resize(function() {
    var height = $( window ).height();
 	var width = $( window ).width();

 	if(width >= 1000){
 		var pad = 855 - (height*1.05);
 		$("#sign-me-up").css("margin-top", pad);
 	}
  	else if(width >= 768){
  		var pad = 764 - (height*1.05);
 		$("#sign-me-up").css("margin-top", pad);
 	}
  	else if(width >= 580){
   		var pad = 665 - (height);
 		$("#sign-me-up").css("margin-top", pad);
 	}
   	else if(width >= 395){
  		var pad = 586 - (height);
 		$("#sign-me-up").css("margin-top", pad);		
 	}
   	else if(width >= 320){
  		var pad = 525 - (height);
 		$("#sign-me-up").css("margin-top", pad);	
 	}
}