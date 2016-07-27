function newText() {
                  document.getElementById("full name").innerHTML = "Johannes Chrysostomus Wolfgangus Theophilus Mozart";
}
function newText1() {
                  document.getElementById("pets").innerHTML = "He had a dog, horse, canary, and a starling. He used a tune sung by the starling in Piano Concerto No. 17 in G major, K. 453.";
}
    
function newText2() {
                  document.getElementById("nickname").innerHTML = "Wolfie";
}
function newText3() {
                  document.getElementById("game").innerHTML = "Billards";
}
function newText4() {
                  document.getElementById("effect").innerHTML = "It is a theory that claims listening to Mozart's music will temporarily improve spatial-temporal reasoning.";
}

$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color", "#b3ff1a");
});
    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
});

$(document).ready(function(){
    $("#button7").click(function(){
        alert("We welcome your feedback. Be sure that all fields were filled in correctly");
    });
 });
/*JQuery for mozart portraits*/
$(window).load(function() {	//start after HTML, images have loaded

	var InfiniteRotator = 
	{
		init: function()
		{
			//initial fade-in time (in milliseconds)
			var initialFadeIn = 1000;
			
			//interval between items (in milliseconds)
			var itemInterval = 5000;
			
			//cross-fade time (in milliseconds)
			var fadeTime = 2500;
			
			//count number of items
			var numberOfItems = $('.rotating-item').length;

			//set current item
			var currentItem = 0;

			//show first item
			$('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);

			//loop through the items		
			var infiniteLoop = setInterval(function(){
				$('.rotating-item').eq(currentItem).fadeOut(fadeTime);

				if(currentItem == numberOfItems -1){
					currentItem = 0;
				}else{
					currentItem++;
				}
				$('.rotating-item').eq(currentItem).fadeIn(fadeTime);

			}, itemInterval);	
		}	
	};

	InfiniteRotator.init();
	
});

    
 