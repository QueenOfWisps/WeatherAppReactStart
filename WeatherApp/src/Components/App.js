import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      timezoneOffset: 0, 
      zipcode: "",
      city: {},
      forecast: [],
      selectedDate: null
    };
    this.url = "https://api.openweathermap.org/data/2.5/onecall?";
    this.apikey = "&exclude=minutely,hourly,current&units=imperial&appid=3fca0a11ad63bd24761e381b964b5ae9";

  }

  render() {
    return (
        <div>App</div>
    );
  }
}

export default App;