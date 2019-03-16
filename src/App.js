import React, { Component } from 'react';
//import './App.css';

const API_KEY = process.env.REACT_APP_STEAM_API_KEY;

class App extends Component {

  state = {
    appId: 'original',
  }

  getNews = (e) => {
    
    //prevents page refresh
    e.preventDefault();

    //completing the URL
    var homeURL = "http://localhost:4000/getnews/?"
    var userInput = this.state.appId;
    var newURL = `${homeURL}${userInput}`;

    var req = new XMLHttpRequest();
    req.open("GET", newURL, true);
    req.addEventListener('load', function(){
      if(req.status>= 200 && req.status<400){
      var response = JSON.parse(req.responseText);
      console.log(JSON.parse(req.responseText));
      }
      else {
        console.log("Error in network request: " + response.statusText);
      }
    });
    req.send(null);
}

handleChange = (e) => {
  this.setState ({
    appId: e.target.value
  });
}

  render() {
    return (
      <div className="App">
        <h1>Steam Game Time Viewer</h1>
        <p>Welcome!</p>
        <p>appId: {this.state.appId}</p>
        <form onSubmit={this.getNews}>
          <input type="text" onChange={this.handleChange}/>
          <button>GET NEWS</button>
        </form>
      </div>
    );
  }
}

export default App;
