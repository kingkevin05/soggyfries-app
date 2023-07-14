import React, { useEffect, useState } from 'react';

const DisplayWeather = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=9bd0603a04cb662f60d9ff018ae27e92
      `)
        .then(response => response.json())
        .then(data => setWeather(data));
    });
  }, []);

  if (!weather) return <div>Loading...</div>;

  return (
    <div>
      <h2>Current Weather:</h2>
      <p>{weather.weather[0].main}</p>
      <p>{weather.weather[0].description}</p>
    </div>
  );
};

export default DisplayWeather;
