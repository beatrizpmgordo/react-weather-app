import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This project was coded by{" "}
        <a href="https://www.shecodes.io/graduates/93323-beatriz-gordo">
          Beatriz Gordo
        </a>{" "}
        and is{" "}
        <a href="https://github.com/beatrizpmgordo/WeatherApp">
          open sourced on GitHub
        </a>{" "}
        and <a href="https://app.netlify.com/">hosted on Netlifly</a>
      </p>
    </div>
  );
}
