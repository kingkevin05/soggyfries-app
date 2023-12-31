import React, { useEffect, useState } from 'react';

const DisplayTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <h2>{time.toLocaleTimeString()}</h2>
  );
};

export default DisplayTime;
