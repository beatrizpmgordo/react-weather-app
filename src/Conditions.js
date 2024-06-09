import React from "react";
import Humidity from "./Humidity";
import Wind from "./Wind";

import "./Conditions.css";

export default function Conditions() {
  return (
    <div className="Conditions">
      <ul className="weather-conditions">
        <li>
          <Humidity value={78} />
        </li>
        <li>
          <Wind value={4} />
        </li>
      </ul>
    </div>
  );
}
