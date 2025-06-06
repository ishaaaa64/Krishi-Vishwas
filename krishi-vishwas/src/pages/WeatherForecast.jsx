import React, { useState, useEffect } from 'react';

const WeatherForecast = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [bgIndex, setBgIndex] = useState(0);

  const backgroundImages = [
    '/images/weather1.jpg',
    '/images/weather2.jpg',
    '/images/weather3.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchWeather = async () => {
    if (!city) {
      setError('Please enter a city.');
      return;
    }
    setError('');
    try {
      const res = await fetch(`http://localhost:5000/api/weather?city=${city}`);
      const data = await res.json();
      if (res.ok) {
        setWeather(data);
      } else {
        setError(data.message || 'City not found.');
      }
    } catch (err) {
      setError('Error fetching weather data.');
    }
  };

  const containerStyle = {
    backgroundImage: `url(${backgroundImages[bgIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    transition: 'background-image 1.5s ease-in-out',
    fontFamily: 'Segoe UI, sans-serif',
    display: 'flex',
    flexDirection: 'column',
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 60, 0, 0.6)',
    minHeight: '100vh',
    padding: '30px 20px 80px',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '30px',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    color: '#a8ff9e',
    textShadow: '2px 2px 4px #000',
  };

  const subheadingStyle = {
    fontSize: '1.2rem',
    marginTop: '5px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  };

  const inputStyle = {
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    width: '260px',
    fontSize: '16px',
    outline: 'none',
  };

  const buttonStyle = {
    padding: '10px 25px',
    background: '#58b368',
    border: 'none',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const errorStyle = {
    color: '#ffcccc',
    marginTop: '5px',
  };

  const cardStyle = {
    marginTop: '30px',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '16px',
    padding: '25px',
    maxWidth: '400px',
    width: '90%',
    textAlign: 'center',
    color: '#fff',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
    animation: 'fadeInUp 0.7s ease-in-out',
  };

  const footerStyle = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 80, 0, 0.7)',
    padding: '12px',
    fontSize: '14px',
    color: '#c1ffc1',
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}>
        <header style={headerStyle}>
          <h1 style={headingStyle}>🌦 Krishi Vishwas Weather Forecast</h1>
          <p style={subheadingStyle}>Stay ahead with real-time weather updates!</p>
        </header>

        <div style={formStyle}>
          <input
            type="text"
            placeholder="Enter your city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={inputStyle}
          />
          <button onClick={fetchWeather} style={buttonStyle}>Get Weather</button>
          {error && <p style={errorStyle}>{error}</p>}
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
          © 2025 Krishi Vishwas | Weather Insight that Cares 🌱
        </footer>
      </div>
    </div>
  );
};

export default WeatherForecast;
