'use client'
import React from "react";
import Board from "./Board/page";
import './style.css';
import Link from 'next/link';


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerX: "", // Nombre del jugador X
      playerO: "", // Nombre del jugador O
      history: [{ squares: Array(9).fill(null) }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handlePlayerXNameChange = (e) => {
    this.setState({ playerX: e.target.value });
  };

  handlePlayerONameChange = (e) => {
    this.setState({ playerO: e.target.value });
  };

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const { playerX, playerO, history } = this.state;
    const current = history[this.state.stepNumber];
    const ganador = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? `Movimiento #${move}` : "Iniciar el Juego";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}className="text-white">{desc}</button>
        </li>
      );
    });

    let status;
    if (ganador) {
      status = `Ganador: ${ganador}`;
    } else {
      status = `Le toca a: ${this.state.xIsNext ? playerX : playerO}`;
    }

    return (
      <div className="game">
      
        <div>
          <div>
          <p className="text-white">X</p>
            <input
              type="text"
              placeholder="Nombre del Jugador X"
              value={playerX}
              onChange={this.handlePlayerXNameChange}
              className="custom-input2"
            />
            
          </div>
          <div>
          <p className="text-white">O</p>
            <input
              type="text"
              placeholder="Nombre del Jugador O"
              value={playerO}
              onChange={this.handlePlayerONameChange}
              className="custom-input"
            />
          </div>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
        <div className="game-board">
          <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
        </div><h6><Link href="/"><h5>volver al inicio</h5></Link></h6>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
  
}

export default Game;
