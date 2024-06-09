import React from "react";
import Day from "./Day";
import Description from "./Description";

import "./City.css";

export default function City(props) {
  return (
    <div className="City">
      <div className="current-data">
        <h1>{props.value}</h1>
        <ul>
          <li>
            <Day
              day="Friday"
              time="16:30"
            />
          </li>
          <li>
            <Description value="Light rain" />
          </li>
        </ul>
      </div>
    </div>
  );
}
