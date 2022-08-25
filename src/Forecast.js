import React from "react";
import "./Forecast.css";

import "bootstrap/dist/css/bootstrap.min.css";
//import axios from "axios";

export default function Forecast(props) {
  // const [forecastData, setForecastData] = useState(false);
  //const [loaded, setLoaded] = useState(false);

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let date = new Date();

  let day = days[date.getDay()];

  return (
    <div className="container">
      <div className="row">
        <div className="next-days col">
          <h4>Tue</h4>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            width="50"
          />
          <strong className="high-temp">{20}°</strong>
          <span className="low-temp"> {17}°</span>
        </div>
      
      
        <div className="next-days col">
          <h4>Wed</h4>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            width="50"
          />
          <strong className="high-temp">{20}°</strong>
          <span className="low-temp"> {17}°</span>
        </div>
      
      
        <div className="next-days col">
          <h4>Thru</h4>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            width="50"
          />
          <strong className="high-temp">{19}°</strong>
          <span className="low-temp"> {20}°</span>
        </div>
      
      
        <div className="next-days col">
          <h4>Fri</h4>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            width="50"
          />
          <strong className="high-temp">{13}°</strong>
          <span className="low-temp"> {12}°</span>
        </div>
       
      
      
        <div className="next-days col">
          <h4>Sat</h4>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            width="50"
          />
          <strong className="high-temp">{23}°</strong>
          <span className="low-temp"> {13}°</span>
        </div>
      
      
        <div className="next-days col">
          <h4>Sun</h4>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            width="50"
          />
          <strong className="high-temp">{28}°</strong>
          <span className="low-temp"> {23}°</span>
        </div>
      </div>
    </div>
  );
}
