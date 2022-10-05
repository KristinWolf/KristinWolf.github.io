// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "hardboiled eggs") {
         $("#feedback").css("color","black");
         $("#feedback").html("hardboiled eggs");
      }

      if ($(this).attr("id") == "scrambled eggs") {
         $("#feedback").css("color","black");
         $("#feedback").html("scrambled eggs");
      }

      if ($(this).attr("id") == "poached egg") {
         $("#feedback").css("color","black");
         $("#feedback").html("poached egg");  
      }   
	  
	  if ($(this).attr("id") == "soft boiled egg") {
         $("#feedback").css("color","black");
         $("#feedback").html("soft boiled egg");
      }
	   
	  if ($(this).attr("id") == "omelette") {
         $("#feedback").css("color","black");
         $("#feedback").html("omelette");
      }

	  if ($(this).attr("id") == "sunny side up egg") {
         $("#feedback").css("color","black");
         $("#feedback").html("sunny side up egg");
      }
  
  $("#feedback").css("backgroundColor","#white");

$('#myModal').modal("show");

   });
}); //end main jQuery function
