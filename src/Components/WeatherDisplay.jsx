function WeatherDisplay({ data }) {
    if (!data) return null; 

    const location = data.location;
    const current = data.current;

    const tempC = current.temp_c;
    const description = current.condition.text;
    const iconUrl = current.condition.icon;
    const humidity = current.humidity;
    const windMph = current.wind_mph;

    return (
      <div className="weather-container">
        <h2>Weather in {location.name}, {location.country}</h2>

        <div className="main-info">
          <img 
            src={iconUrl} 
            alt={description} 
            className="weather-icon"
          />
          <p className="temperature">
            {Math.round(tempC)}°C
          </p>
        </div>

        <p className="description">
          {description}
        </p>

        <div className="details">
          <p>Feels Like: {Math.round(current.feelslike_c)}°C</p>
          <p>Humidity: {humidity}%</p>
          <p>Wind Speed: {windMph} mph</p> 
        </div>
      </div>
    );
  }

  export default WeatherDisplay;