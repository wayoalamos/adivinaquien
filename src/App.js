import logo from './silvafoto5.png';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const questions = [
    "quien se masturbó hoy",
    "va a ser el primero en vomitar en el matri",
    "tiene VIH",
    "caca"
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1> Adivina quien ...</h1>
        <p> {questions[count]} </p>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => setCount(count + 1)}>
          Siguiente
        </button>
        <button onClick={() => setCount(count - 1)}>
          Atras
        </button>
      </header>
    </div>
  );
}

export default App;
