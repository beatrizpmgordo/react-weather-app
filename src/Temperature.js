import React from "react";

import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <div className="current-temperature">
        <span>{props.value}</span>
        <span class="units">°C |°F</span>
      </div>
    </div>
  );
}
