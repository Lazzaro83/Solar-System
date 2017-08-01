var width = document.body.clientWidth * 4;
var height = document.body.clientHeight;

//this function creates stars on the night sky and calls functions for stars pulsing
(function(){
	
	var scriptElement = document.querySelector("script");
    
	for(var i = 0; i < 180; i++){
		var star = document.createElement("span");
		star.classList.add("star");
		document.body.insertBefore(star, scriptElement);
		let left = Math.floor(Math.random() * width);
		let top = Math.floor(Math.random() * height);
		star.style.left = left + "px";
		star.style.top = top + "px";
	}
	setInterval(pulsingStars, 2000);
	setInterval(removePulsingStars, 1900)
})();

function pulsingStars(){
	var stella = document.querySelectorAll(".star");
	var randomStar1 = Math.floor(Math.random() * stella.length);
	var randomStar2 = Math.floor(Math.random() * stella.length);
	var randomStar3 = Math.floor(Math.random() * stella.length);
	var randomStar4 = Math.floor(Math.random() * stella.length);
	var randomStar5 = Math.floor(Math.random() * stella.length);
	var firstStar = stella[randomStar1];
	firstStar.classList.add("shine");
	var secondStar = stella[randomStar2];
	secondStar.classList.add("shine");
	var thirdStar = stella[randomStar3];
	thirdStar.classList.add("shine");
	var fourthStar = stella[randomStar4];
	fourthStar.classList.add("shine");
	var fifthStar = stella[randomStar5];
	fifthStar.classList.add("shine");
}
function removePulsingStars(){
	var pulsingStars = document.querySelectorAll(".shine");
	pulsingStars.forEach(function(e){
		e.classList.remove("shine");
	})
}