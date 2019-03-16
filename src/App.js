import React, { Component } from 'react';
import Title from './Title';
//import './App.css';

class App extends Component {

  state = {
    steamId: 'empty',
  }

getGetOwnedGames = (e) => {
  console.log("getownedgames() triggered")
  
  //prevents page refresh
  e.preventDefault();
  //completing the URL
  var homeURL = "http://localhost:4000/getownedgames/?"
  var userInput = this.state.steamId;
  var newURL = `${homeURL}${userInput}`;

  var req = new XMLHttpRequest();

  req.open("GET", newURL, true);

  req.addEventListener('load', function() {
    if (req.status>= 200 && req.status<400){
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
    steamId: e.target.value
  });
}

  render() {
    return (
      <div className="App">
        <Title />
        <p>Type steamId to start:</p>
        <p>76561197980934566</p>
        <form className="Form" onSubmit={this.getGetOwnedGames}>
          <input type="text" placeholder="76561197980934566" onChange={this.handleChange}/>
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default App;
