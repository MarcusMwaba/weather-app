let weather = {
  apikey:"3d328acb66fe0da8928eaf9faa64ea03",
  fetchweather: function (city) {
      fetch(
        "http://api.openweathermap.org/data/2.5/weather?q="
         + city 
        +"&units=metric&appid="
        +this.apikey
    )
     .then((response) => response.json())
     .then((data) => this.displayweather(data));
     },
     displayweather: function( data ) {
     const { name } = data; 
     const { icon, description } = data.weather[0];
     const { temp, humidity } = data.main;
     const { speed } = data.wind;
     document.querySelector(".city").innerText = " weather in " + name;
     document.querySelector(".icon").src="http://openweathermap.org/img/wn/" + icon +".png";
     document.querySelector(".description").innerText =  description;
     document.querySelector(".temp").innerText =  temp +"°C";
     document.querySelector(".humidity").innerText = "humidity :"+ humidity +"%";
     document.querySelector(".wind").innerText = "wind speed:"+ speed +"km/h";
     document.querySelector(".weather").classList.remove("loading");
    },
     search: function () {
     this.fetchweather(document.querySelector( ".bar").value);
    }
     };

     document.querySelector(".button").addEventListener("click", function() {
     weather.search();
     });
     document.querySelector(".bar ").addEventListener("keyup", function (event) {
     if(event.key=="Enter" ) {
     weather.search();
    }
  })
  weather.fetchweather("lusaka")
