var data;
// AJAX declaration to JSON file
function loadPlanets(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
}
// function call for inserting planets and positioning them
loadPlanets("planets.json", function(data){
	var planets = document.querySelectorAll(".planet");
	var solarSistemObj = document.querySelectorAll("div");
	for(var i = 0; i < planets.length; i++){
		planets[i].style.backgroundImage = "url(" + data[i].image + ")";
		planets[i].style.top = Math.floor(height - height / 1.5) + 'px';
		planets[i].style.left = parseInt(data[i].distance) + 411 + "px";
	}
	solarSistemObj.forEach(function(e){
		e.addEventListener("click", showInfo, false);
	})
})

//function which controls info field, it's content and position
var body = document.querySelector("body");
var info = document.querySelector(".info");
var title = document.querySelector(".title");
var description = document.querySelector(".description");
function showInfo(e){
	var parentPosition = getPosition(body);
	var xPosition = e.clientX - parentPosition.x + (info.clientWidth /2);
	var yPosition = e.clientY - parentPosition.y + (info.clientHeight);
	//console.table([e.clientX, e.clientY, parentPosition.x, parentPosition.y, info.clientWidth, info.clientHeight]);
	info.style.display = "block";
	info.classList.add("big");
	info.style.left = xPosition + "px";
    info.style.top = yPosition + "px";
    if(!btn){
	    var btn = document.createElement("button");
	    btn.textContent = "X";
	    btn.classList.add("turnOff");
	    btn.addEventListener("click", hideInfo, false);
	    info.appendChild(btn);	
    }
    for(var i = 0; i < 9; i++){
    	if(e.target.classList[1] == data[i].name.toLowerCase()){
    		title.textContent = data[i].name;
    		description.textContent = data[i].description;
    	} else if(e.target.classList[0] == data[i].name.toLowerCase()){
    		title.textContent = data[i].name;
    		description.textContent = data[i].description;
    	} 
    }
}

function getPosition(el) {
  var xPos = 0;
  var yPos = 0;
 
  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;
 
      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // determines position of top left corner for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }
 
    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}
function hideInfo(e){
	//e.stopPropagation();
	info.style.display = "none";
}