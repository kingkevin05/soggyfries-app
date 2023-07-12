import React, { useEffect, useState } from 'react';

function HomePage() {
  const [date, setDate] = useState(new Date());
  const [weather, setWeather] = useState(null);

  // Update the time every second
  useEffect(() => {
    const timerID = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  // Fetch weather data when the component mounts
  useEffect(() => {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=YourCity&appid=9bd0603a04cb662f60d9ff018ae27e92")
      .then(response => response.json())
      .then(data => setWeather(data.main));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Current Time: {date.toLocaleTimeString()}</h2>
      {weather && <h2>Current Temperature: {weather.temp}</h2>}
    </div>
  );
}

export default HomePage;
