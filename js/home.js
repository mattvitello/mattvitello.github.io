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
 		$("#sign-me-up").css("margin-top", "inherit");
 	}
   	else if(width >= 395){
 		$("#sign-me-up").css("margin-top", "inherit");		
 	}
   	else if(width >= 320){
 		$("#sign-me-up").css("margin-top", "inherit");	
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
    $("#sign-me-up").css("margin-top", "inherit");
  }
  else if(width >= 395){
    $("#sign-me-up").css("margin-top", "inherit");    
  }
  else if(width >= 320){
    $("#sign-me-up").css("margin-top", "inherit");  
  }
});