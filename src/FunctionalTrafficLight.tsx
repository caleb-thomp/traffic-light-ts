import React, { useState } from 'react';

export const FunctionalTrafficLight : React.FC = () => {

  const [status, setStatus] = useState("red");
  const checkStatus = (color: string) => (status === color ? color : "black");
  const nextState = () => {
    setStatus(status === "red" ? "yellow" : status === "yellow" ? "green" : "red");
  }

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div className={`circle ${checkStatus("red")}`}></div>
        <div className={`circle ${checkStatus("yellow")}`}></div>
        <div className={`circle ${checkStatus("green")}`}></div>
      </div>
      <button onClick={nextState} className="next-state-button">Next State</button>
    </div>
  );
};



