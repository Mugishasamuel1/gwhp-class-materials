document.addEventListener("DOMContentLoaded", () => { //This waits until the full HTML page is loaded before running JavaScript.
    document.getElementById("getWeather").addEventListener("click", loadWeather);//it calls the loadweather when we click the button
  });
  
  async function loadWeather() { //async allows us to use await when fetching data.
    const city = document.getElementById("city").value.trim();
    const weatherContainer = document.getElementById("weather");
  
    if (!city) {//if the user didn't type anything
      weatherContainer.innerHTML = "<p>Please enter a city name.</p>";
      return; //stop the function
    }
  
    try {
      const apiKey = "448b0b627edabae890d2594360754d85"; 
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`);//try to fetch weather information from the website
      //units=metric →
     // Makes the temperature come back in Celsius (°C) instead of Kelvin.


      if (!response.ok) {
        throw new Error("City not found");
      }
  
      const weatherData = await response.json(); //extracting the data from the weather data 
      displayWeather(weatherData); //displaying what has been extracted
    } catch (error) {
      console.error("Error:", error);
      weatherContainer.innerHTML = `<p>Failed to load weather. ${error.message}</p>`;
    }
  }
  
  function displayWeather(data) {
    const container = document.getElementById("weather");
    container.innerHTML = ""; // Clear previous content
  
    const weatherElement = document.createElement("div");
    weatherElement.className = "weather-card";
  
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  
    weatherElement.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <img src="${iconUrl}" alt="${data.weather[0].description}" />
      <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
      <p><strong>Condition:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
    `;
  
    container.appendChild(weatherElement);
  }
  