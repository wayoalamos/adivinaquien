import logo from './silvafoto5.png';
import './App.css';
import React, { useState } from 'react';
import styled from "styled-components";

const Button = styled.button`
  font-size: 30px;
  font-weight: bold;
  font-family: Brush Script MT;
  width: 250px;
  height: 70px;
  background-color: #e91e63;
  color: white;
  padding: 10px 10px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 5px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #ad1457;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

function App() {
  const [count, setCount] = useState(0);
  const questions = [
    "va a ser el primer invitado en bailar con la novia",
    "quien se quedará dormido primero",
    "va a ser el primero en ir a cagar en el matri",
    "va a ser el primero en vomitar en el matri",
    "ha probado más drogas",
    "tiene un fetiche con los pies",
    "lo ha hecho con dos personas distintas la misma noche",
    "tiene VIH",
    "quien se masturbó hoy",
    "quien ha soñado con la mamá de otro del grupo",
    "eyacula más ml",
    "puede eyacular más lejos"
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{color: "#e91e63", fontFamily: "Brush Script MT"}}> Adivina quien ...</h1>
        <p  style={{fontFamily: "Brush Script MT", fontSize: "30px"}}> {questions[count]} </p>
        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick={() => setCount(count + 1)}>
          Siguiente
        </Button>
        <button onClick={() => setCount(count - 1)}>
          Atras
        </button>
      </header>
    </div>
  );
}

export default App;
