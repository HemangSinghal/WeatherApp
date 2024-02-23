const API_KEY = `8863242cfb2b1d357e6093d9a4df19a4b`
const form = document.querySelector("form");
const search = document.querySelector("#search")
const weather = document.querySelector("#weather");


const getWeather = async (city) => {
    const url = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore&appid=${API_KEY}";
    const response = await fetch(url);
    console.log(response);
}


form.addEventListener("submit", function (event) {
    console.log(search.value);
    getWeather(search.value);
    event.preventDefault();
}
)