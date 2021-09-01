var savedCity="";
var savedTempC="";
var savedHumidityC="";
var savedWindC="";
var savedTemp1="";
var savedHumidity1="";
var savedWind1="";
var savedTemp2="";
var savedHumidity2="";
var savedWind2="";
var savedTemp3="";
var savedHumidity3="";
var savedWind3="";

var storedCity
var storedTempC
var storedHumidityC
var storedWindC
var storedTemp1
var storedHumidity1
var storedWind1
var storedTemp2
var storedHumidity2
var storedWind2
var storedTemp3
var storedHumidity3
var storedWind3
var recentSearchEl = document.querySelector('#recent-search');
var recentSearchContainer= document.querySelector("#recent-search-container");
var listRSEl= document.querySelector("#list-rs");

var weather = {
    apiKey: "c3c94d0094c326073d407b41057affc5",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + 
            city + "&units=metric&appid=" + 
            this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        console.log(data);
            
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        const {lon}= data.coord;
        const {lat}= data.coord;
        




        document.querySelector("#F0").innerText = "Weather in " + name;
        document.querySelector("#icon").src = "http://openweathermap.org/img/w/"+icon+".png";
        document.querySelector("#F0-t").textContent=(temp + "°C");
        document.querySelector("#F0-h").innerText =  humidity + "%";
        document.querySelector("#F0-w").innerText = speed + " km/hr";        
        fetchWeatherForecast(lon,lat);
        localStorage.setItem("city",name);
        localStorage.setItem("temp",temp);
        localStorage.setItem("wind",speed);
        localStorage.setItem("humidity",humidity);

    },
    
    search: function(destination) {
        this.fetchWeather(destination);
    }

};
function fetchWeatherForecast(lon,lat) {
    fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&exclude=hourly&appid=7a22439e6548e94ce1031247d7c04dd8"
    ).then((response) => response.json())
    .then((data) => this.displayWeatherForecast(data));
}
function displayWeatherForecast(data) {
    console.log(data);
    const day1temp = data.daily[0].temp.day;
    const day1wind = data.daily[0].wind_speed;
    const day1humidity= data.daily[0].humidity;
    const day2temp = data.daily[1].temp.day;
    const day2wind = data.daily[1].wind_speed;
    const day2humidity= data.daily[1].humidity;
    const day3temp = data.daily[2].temp.day;
    const day3wind = data.daily[2].wind_speed;
    const day3humidity= data.daily[2].humidity;
    const day4temp = data.daily[3].temp.day;
    const day4wind = data.daily[3].wind_speed;
    const day4humidity= data.daily[3].humidity;
    const day5temp = data.daily[4].temp.day;
    const day5wind = data.daily[4].wind_speed;
    const day5humidity= data.daily[4].humidity;

    const UVI = data.daily[0].uvi;

    if(UVI<=6.9){
        document.querySelector("#F0-UV").style.backgroundColor="Green";
    } else{
        document.querySelector("#F0-UV").style.backgroundColor="Red";
    }




    document.querySelector("#F0-UV").textContent= UVI;
    document.querySelector("#F1-t").textContent= parseInt(day1temp-273.1) + "°C";
    document.querySelector("#F1-h").innerText =  day1humidity + "%";
    document.querySelector("#F1-w").innerText =  day1wind + " km/hr";
    document.querySelector("#F2-t").textContent= parseInt(day2temp-273.1) + "°C";
    document.querySelector("#F2-h").innerText =  day2humidity + "%";
    document.querySelector("#F2-w").innerText =  day2wind + " km/hr";  
    document.querySelector("#F3-t").textContent=(parseInt(day3temp-273.1) + "°C");
    document.querySelector("#F3-h").innerText =  day3humidity + "%";
    document.querySelector("#F3-w").innerText =  day3wind + " km/hr";  
    document.querySelector("#F4-t").textContent=(parseInt(day4temp-273.1) + "°C");
    document.querySelector("#F4-h").innerText =  day4humidity + "%";
    document.querySelector("#F4-w").innerText =  day4wind + " km/hr";  
    document.querySelector("#F5-t").textContent=(parseInt(day5temp-273.1) + "°C");
    document.querySelector("#F5-h").innerText =  day5humidity + "%";
    document.querySelector("#F5-w").innerText =  day5wind + " km/hr";  
   
    localStorage.setItem("temp1",day1temp);
    localStorage.setItem("wind1",day1wind);
    localStorage.setItem("humidity1",day1humidity);
    localStorage.setItem("temp2",day2temp);
    localStorage.setItem("wind2",day2wind);
    localStorage.setItem("humidity2",day2humidity);
    localStorage.setItem("temp3",day3temp);
    localStorage.setItem("wind3",day3wind);
    localStorage.setItem("humidity3",day3humidity);
}

function init() {
    getRecentSearch();
}
//save the recent searches
function getRecentSearch() {
    var storedCity=localStorage.getItem("city");
    if (storedCity === null) {
        savedCity = "";
      } else {
        savedCity = storedCity;
      }
    var storedTempC = localStorage.getItem("temp");
    if (storedTempC === null) {
        savedTempC = "";
      } else {
        savedTempC = storedTempC;
      }
    var storedHumidityC =localStorage.getItem("humidity");
    if (storedHumidityC === null) {
        savedHumidityC = "";
      } else {
        savedHumidityC = storedHumidityC
      }
    var storedWindC=localStorage.getItem("wind");
    if (storedWindC === null) {
        savedWindC = "";
      } else {
        savedWindC = storedWindC;
      }
    var storedTemp1 = localStorage.getItem("temp1");
    if (storedTemp1 === null) {
        savedTemp1 = "";
    } else {
        savedTemp1 = storedTemp1;
    }
    var storedHumidity1 =localStorage.getItem("humidity1");
    if (storedHumidity1 === null) {
        savedHumidity1 = "";
    } else {
        savedHumidity1 = storedHumidity1
    }
    var storedWind1=localStorage.getItem("wind1");
    if (storedWind1 === null) {
        savedWind1 = "";
    } else {
        savedWind1 = storedWind1;
    } 
    var storedTemp2 = localStorage.getItem("temp2");
    if (storedTemp2 === null) {
        savedTemp2 = "";
    } else {
        savedTemp2 = storedTemp2;
    }
    var storedHumidity2 =localStorage.getItem("humidity2");
    if (storedHumidity2 === null) {
        savedHumidity2 = "";
    } else {
        savedHumidity2 = storedHumidity2
    }
    var storedWind2=localStorage.getItem("wind2");
    if (storedWind2 === null) {
        savedWind2 = "";
    } else {
        savedWind2 = storedWind2;
    }
    var storedTemp3 = localStorage.getItem("temp3");
    if (storedTemp3 === null) {
        savedTemp3 = "";
    } else {
        savedTemp3 = storedTemp3;
    }
    var storedHumidity3 =localStorage.getItem("humidity3");
    if (storedHumidity3 === null) {
        savedHumidity3 = "";
    } else {
        savedHumidity3 = storedHumidity3
    }
    var storedWind3=localStorage.getItem("wind3");
    if (storedWind3 === null) {
        savedWind3 = "";
    } else {
        savedWind3 = storedWind3;
    } 
}
init()

recentSearchEl.addEventListener("click",function(){
    var titleRS =document.createElement("h2");
    titleRS.textContent="Recent Searches";
    var lastRS = document.createElement("li");
    var lastTemp = document.createElement("li");
    var lastWind = document.createElement("li");
    var lastHumidity = document.createElement("li");
    var lastTemp1 = document.createElement("li");
    var lastWind1 = document.createElement("li");
    var lastHumidity1 = document.createElement("li");
    var lastTemp2 = document.createElement("li");
    var lastWind2 = document.createElement("li");
    var lastHumidity2 = document.createElement("li");
    var lastTemp3 = document.createElement("li");
    var lastWind3 = document.createElement("li");
    var lastHumidity3 = document.createElement("li");
    lastRS.textContent= "Name:  "+ savedCity;
    lastTemp.textContent= "Current Temperature:  "+ savedTempC+ "°C";
    lastWind.textContent= "Current Wind Speed:  "+ savedWindC+ "km/hr";
    lastHumidity.textContent= "Current Humidity:  "+ savedHumidityC;

    lastTemp1.textContent= "Day 1 Temperature:  "+ savedTemp1+ "°C";
    lastWind1.textContent= "Day 1 Wind Speed:  "+ savedWind1+ "km/hr";
    lastHumidity1.textContent= "Day 1 Humidity:  "+ savedHumidity1;

    lastTemp2.textContent= "Day 2 Temperature:  "+ savedTemp2+ "°C";
    lastWind2.textContent= "Day 2 Wind Speed:  "+ savedWind2+ "km/hr";
    lastHumidity2.textContent= "Day 2 Humidity:  "+ savedHumidity2;

    lastTemp3.textContent= "Day 3 Temperature:  "+ savedTemp3+ "°C";
    lastWind3.textContent= "Day 3 Wind Speed:  "+ savedWind3+ "km/hr";
    lastHumidity3.textContent= "Day 3 Humidity:  "+ savedHumidity3;

    recentSearchContainer.appendChild(titleRS);
    listRSEl.appendChild(lastRS);
    listRSEl.appendChild(lastTemp);
    listRSEl.appendChild(lastWind);
    listRSEl.appendChild(lastHumidity);
    listRSEl.appendChild(lastTemp1);
    listRSEl.appendChild(lastWind1);
    listRSEl.appendChild(lastHumidity1);
    listRSEl.appendChild(lastTemp2);
    listRSEl.appendChild(lastWind2);
    listRSEl.appendChild(lastHumidity2);
    listRSEl.appendChild(lastTemp3);
    listRSEl.appendChild(lastWind3);
    listRSEl.appendChild(lastHumidity3);


 
    if (recentSearchContainer.style.display==="none"){
        recentSearchContainer.style.display="";
    }else{
        recentSearchContainer.style.display="none";
    }
})



document.querySelector("#search-btn").addEventListener("click", function(){
    weather.search(document.querySelector(".search-bar").value);
    

});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key == "Enter") {
        weather.search(document.querySelector(".search-bar").value);
        
    }
});
document.querySelector("#MC").addEventListener("click", function(){
    weather.search("Mexico City");
});
document.querySelector("#Tor").addEventListener("click", function(){
    weather.search("Toronto");
});
document.querySelector("#DC").addEventListener("click", function(){
    weather.search("Washington");
});
document.querySelector("#SP").addEventListener("click", function(){
    weather.search("Sao Paulo");
});
document.querySelector("#BA").addEventListener("click", function(){
    weather.search("Buenos Aires");
});
document.querySelector("#Bo").addEventListener("click", function(){
    weather.search("Bogota");
});
document.querySelector("#Ni").addEventListener("click", function(){
    weather.search("Nicaragua");
});