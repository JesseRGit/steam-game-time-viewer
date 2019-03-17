import React, { Component } from 'react';
import Title from './Title';
import Form from './Form';
import Description from './Description';
import GamesList from './GamesList';

//import './App.css';

class App extends Component {

  state = {
    steamId: undefined,
    games : [
      { name: 'Cs', id: 1},
      { name: 'LOL', id: 2},
      { name: 'COD', id: 3}
    ],
    fetchedGames: [],
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
        console.log("Response: ", JSON.parse(req.responseText));
        console.log("Game_count:", response.response.game_count);
        console.log("Game[1].name: ", response.response.games[1].name);
        /*
        this.SetState({
          fetchedGames: response
        });
        */
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
        <GamesList games={this.state.games} />
      </div>
    );
  }
}

export default App;
