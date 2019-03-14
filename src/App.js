import React, { Component } from 'react';
//import './App.css';

const API_KEY = process.env.REACT_APP_STEAM_API_KEY;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    var url = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${API_KEY}&steamid=76561197980934566&format=json`;
    console.log(url);
    fetch(url).then(
      response => response.json()
    ).then(
      json => {
        console.log(json);
        this.setState({data: json});
      }
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
