import React, { useEffect, useState } from "react";
export default function Clock() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="Clock">
        <h1>
          {time.getHours().toString().padStart(2, '0')}:
          {time.getMinutes().toString().padStart(2, '0')}:
          {time.getSeconds().toString().padStart(2, '0')}
        </h1>
      </div>
    );
  }