var card = document.querySelector("#card")
var input = document.querySelector("#weatherInput")
var temp = document.querySelector("#temp")
var desc = document.querySelector("#desc")
var title = document.querySelector("#title")
var weatherIcon = document.querySelector("i")


function getWeather(){
	var value = input.value;
	card.style.display = "block";
	fetch("https://api.apixu.com/v1/current.json?key=769f0c2948744f0480683925180604&q="+value)
	.then(response => response.json())
	.then(data => {
		var temperature = Math.round(data.current.temp_c);
		var heading = data.location.name;
		var description = data.current.condition.text;
		title.innerText = heading;
		temp.innerText = temperature+"C";
		desc.innerText = description;

		
	})
}
