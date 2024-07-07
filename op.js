document.getElementById('get-weather-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const keysss = '0c3939a53beb04c17e9c91534f1ddd20'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keysss}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('city-name').textContent = data.name;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
                document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
                document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            } else {
                alert('City not found please try again !');
            }
        })
        .catch(error => console.error('Error fetching the weather data:', error));
});
