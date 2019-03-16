import React, { Component } from 'react';
import Title from './Title';
import Form from './Form';
import Description from './Description';
import List from './List';

//import './App.css';

class App extends Component {

  state = {
    steamId: undefined,
  }

  getOwnedGames = async (e) => {
    console.log("getownedgames() triggered")
    
    let steamId = e.target.elements.steamId.value;

    e.preventDefault();

    let homeURL = "http://localhost:4000/getownedgames/?"
    let newURL = `${homeURL}${steamId}`;
    let req = new XMLHttpRequest();

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

  render() {
    return (
      <div className="App">
        <Title />
        <Description />
        <Form getOwnedGames={this.getOwnedGames}/>
        <p>76561197980934566</p>
        <List />
      </div>
    );
  }
}

export default App;
