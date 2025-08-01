const api_key = "820bd93c7014eebaff728d47554d26bb";

const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchInput = document.querySelector(".search input");

const searchbtn = document.querySelector(".search button");


async function checkWeather(city) {

    if (!city) {
        alert("Please enter a city");
        return;
    }



    const response = await fetch(api_url + city + `&appid=${api_key}`);

    if (!response.ok) {
    alert("City not found. Please try again.");
    return;
  }
    var data = await response.json();


    console.log(data);

    if(!data){

        alert("city not founf");
        return;
    }

    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").textContent = data.main.humidity + "%";
    document.querySelector(".wind").textContent = data.wind.speed + "km/h";



    console.log(typeof (response))
    console.log(typeof (data))

}

searchbtn.addEventListener("click", () => {


    checkWeather(searchInput.value);

});





