import React, { useState } from 'react';

const WeatherForecast = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city) {
      setError('Please enter a city.');
      return;
    }
    setError('');
    try {
      const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your key
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        setError('City not found.');
      }
    } catch (err) {
      setError('Error fetching weather data.');
    }
  };

  const pageStyle = {
    fontFamily: 'Segoe UI, sans-serif',
    padding: '30px',
    background: 'url("https://images.unsplash.com/photo-1602524209221-1c0c57459c43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80") no-repeat center center/cover',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: '#fff',
  };

  const headerStyle = {
    textAlign: 'center',
    backgroundColor: 'rgba(0, 100, 0, 0.7)',
    padding: '20px',
    borderRadius: '10px',
  };

  const formStyle = {
    textAlign: 'center',
    marginTop: '20px',
  };

  const inputStyle = {
    padding: '10px',
    width: '250px',
    marginRight: '10px',
    borderRadius: '5px',
    border: 'none',
    fontSize: '16px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: '#333',
    padding: '20px',
    borderRadius: '15px',
    textAlign: 'center',
    maxWidth: '400px',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  };

  const footerStyle = {
    textAlign: 'center',
    backgroundColor: 'rgba(0, 100, 0, 0.7)',
    padding: '10px',
    borderRadius: '10px',
    color: '#fff',
  };

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h1>🌤 Krishi Vishwas Weather Forecast</h1>
        <p>Get the latest weather updates for your fields!</p>
      </header>

      <div style={formStyle}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button style={buttonStyle} onClick={fetchWeather}>Get Weather</button>
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      </div>

      {weather && (
        <div style={cardStyle}>
          <h2>{weather.name}</h2>
          <p><strong>{weather.weather[0].description}</strong></p>
          <p>🌡 Temp: {weather.main.temp} °C</p>
          <p>💨 Wind: {weather.wind.speed} m/s</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
        </div>
      )}

      <footer style={footerStyle}>
        <p>© 2025 Krishi Vishwas | Bringing Nature Closer to You</p>
      </footer>
    </div>
  );
};

export default WeatherForecast;
