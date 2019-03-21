import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quote from "./Quote";

class travel extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travel</h1>
        </header>
        <Quote
          destination="New York"
          country="United States of America"
          distance="6 301 km - Distance between Marseille and New York"
          photo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/NYC_-_Time_Square_-_From_upperstairs.jpg/1200px-NYC_-_Time_Square_-_From_upperstairs.jpg"
        />
        <Quote
          destination="Tokyo"
          country="Japan"
          distance="10 083 km km - Distance between Marseille and Tokyo"
          photo="https://s3.amazonaws.com/fathom_media/photos/tokyo-street-crossing-larkin-clark.jpg.1200x800_q85_crop.jpg"
        />
      </div>
    );
  }
}

export default travel;