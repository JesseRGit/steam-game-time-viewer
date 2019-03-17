import React, { Component } from 'react';

class GamesList extends Component {
  render() {
    const { games } = this.props;
    const gameList = games.map(game => {
      return (
         <div className="game" key={game.id}>
          Name: {game.name}
        </div>
      )
    })
    return (
      <div className="game-list">
        { gameList }
      </div>
    );
  }
}

export default GamesList;