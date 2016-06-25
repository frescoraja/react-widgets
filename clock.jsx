//apikey= 818e1e033a7c8c2381c0c306a115e09c

import React from 'react';

const Clock = React.createClass({
  getInitialState: function() {
    return { currentTime: new Date() };
  },

  tick: function() {
    this.setState({ currentTime: new Date() });
  },

  componentDidMount: function() {
    this.timerId = setInterval(this.tick, 1000);
  },  

  componentWillUnmount: function() {
    clearInterval(this.timerId);
  },

  render: function() {
    return (
      <div className="clock">
        <p>Time: { this.state.currentTime.toTimeString() }</p>
        <p>Date: { this.state.currentTime.toDateString() }</p>
      </div>
    );
  }
});

const Weather = React.createClass({
  getInitialState: function() {
   return { weather: null };
  },

  componentDidMount: function() {
    navigator.geolocation.getCurrentPosition(this.pollWeather);
  },

  pollWeather: function(location) {
    let lat = location.coords.latitude,
        lon = location.coords.longitude,
        url = "http://api.openweathermap.org/data/2.5/weather?",
        params = {
          lat: lat,
          lon: lon
        };
    url += toQueryString(params);
    const apiKey = "818e1e033a7c8c2381c0c306a115e09c";
    url += `&APPID=${apiKey}`;

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.responseType = 'json';
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.status === 200 && xmlhttp.readyState === 4) {
        this.setState({ weather: xmlhttp.response });
      }
    }

    xmlhttp.open("GET", url);
    xmlhttp.send();
  }, 

  render: function() {
    let content = "";

    if (this.state.weather) {
      let weather = this.state.weather,
          temp = (weather.main.temp - 273.15) * 1.8 + 32;
      content += weather.name + "\n";
      content += temp.toFixed(1) + " degrees";
    } else {
      content = "Loading weather...";
    }

    return (
        <div className="weather">
          {content}
        </div>
    );
  }
});

function toQueryString(obj) {
  let params = [];
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      params.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
    }
  }

  return params.join("&");
}

export { Clock, Weather };
