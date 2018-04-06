var card = document.querySelector("#card")
var input = document.querySelector("#weatherInput")
var temp = document.querySelector("#temp")
var desc = document.querySelector("#desc")
var title = document.querySelector("#title")
var weatherIcon = document.querySelector("i")


function getWeather(){
	value = input.value;
	card.style.display = "block";
	fetch("https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?q="+value+"&APPID=f83ef1709b0150ea336005c94376d613&units=metric")
	.then(response => response.json())
	.then(data => {
		var temperature = Math.round(data.main.temp);
		var heading = data.name;
		var description = data.weather[0].description;
		title.innerText = heading;
		temp.innerText = temperature+"C";
		desc.innerText = description;
		weatherIcon.className = "owf owf-"+data.weather[0].id+" owf-5x"
		
	})
}