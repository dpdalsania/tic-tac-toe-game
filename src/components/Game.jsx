import React from "react";
import "../style/game.css";

class Game extends React.Component {
  state = {
    cellState: ["", "", "", "", "", "", "", "", ""],
    currentPlayer: "X",
  };

  handleClick = (cellId) => {
    const { cellState, currentPlayer } = this.state;
    if (cellState[cellId] === "") {
      let newCellState = cellState;
      newCellState[cellId] = currentPlayer;
      this.setState({
        cellState: newCellState,
        currentPlayer: currentPlayer === "X" ? "O" : "X",
      });
    }
    this.check();
  };

  check = () => {
    const { currentPlayer } = this.state;
    if (this.checkWinner()) {
      alert("Player " + currentPlayer + " wins!");
      this.resetGame();
    } else if (this.checkDraw()) {
      alert("Draw!");
      this.resetGame();
    }
  };

  checkWinner = () => {
    const { cellState } = this.state;
    if (cellState[0] !== "" && cellState[1] !== "" && cellState[2] !== "") {
      if (new Set([cellState[0], cellState[1], cellState[2]]).size === 1) {
        return true;
      }
    }
    if (cellState[3] !== "" && cellState[4] !== "" && cellState[5] !== "") {
      if (new Set([cellState[3], cellState[4], cellState[5]]).size === 1) {
        return true;
      }
    }
    if (cellState[6] !== "" && cellState[7] !== "" && cellState[8] !== "") {
      if (new Set([cellState[6], cellState[7], cellState[8]]).size === 1) {
        return true;
      }
    }
    if (cellState[0] !== "" && cellState[4] !== "" && cellState[8] !== "") {
      if (new Set([cellState[0], cellState[4], cellState[8]]).size === 1) {
        return true;
      }
    }
    if (cellState[2] !== "" && cellState[4] !== "" && cellState[6] !== "") {
      if (new Set([cellState[2], cellState[4], cellState[6]]).size === 1) {
        return true;
      }
    }
    if (cellState[0] !== "" && cellState[3] !== "" && cellState[6] !== "") {
      if (new Set([cellState[0], cellState[3], cellState[6]]).size === 1) {
        return true;
      }
    }
    if (cellState[1] !== "" && cellState[4] !== "" && cellState[7] !== "") {
      if (new Set([cellState[1], cellState[4], cellState[7]]).size === 1) {
        return true;
      }
    }
    if (cellState[2] !== "" && cellState[5] !== "" && cellState[8] !== "") {
      if (new Set([cellState[2], cellState[5], cellState[8]]).size === 1) {
        return true;
      }
    }
    return false;
  };

  checkDraw = () => {
    const { cellState } = this.state;
    return !cellState.includes("");
  };

  resetGame = () => {
    this.setState({
      cellState: ["", "", "", "", "", "", "", "", ""],
      currentPlayer: "X",
    });
  };

  render() {
    const { cellState, currentPlayer } = this.state;
    return (
      <div>
        <h2>Tic-Tac-Toe Game</h2>
        <h3>Current Player : {currentPlayer}</h3>
        <table>
          <tr>
            <td onClick={() => this.handleClick(0)}>{cellState[0]}</td>
            <td onClick={() => this.handleClick(1)}>{cellState[1]}</td>
            <td onClick={() => this.handleClick(2)}>{cellState[2]}</td>
          </tr>
          <tr>
            <td onClick={() => this.handleClick(3)}>{cellState[3]}</td>
            <td onClick={() => this.handleClick(4)}>{cellState[4]}</td>
            <td onClick={() => this.handleClick(5)}>{cellState[5]}</td>
          </tr>
          <tr>
            <td onClick={() => this.handleClick(6)}>{cellState[6]}</td>
            <td onClick={() => this.handleClick(7)}>{cellState[7]}</td>
            <td onClick={() => this.handleClick(8)}>{cellState[8]}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Game;
