import logo from './silvafoto5.png';
import './App.css';
import React, { useState } from 'react';
import styled from "styled-components";

const Button = styled.button`
  font-size: 30px;
  font-weight: bold;
  font-family: Cursive;
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
    "hace videos de tiktok escondido",
    "se quedará dormido primero hoy",
    "ahora tiene el culo más sucio",
    "La tiene parada",
    "va a ser el primero en ir a cagar en el matri",
    "va a ser el primer invitado en bailar con la novia",
    "va a ser el primero en vomitar en el matri",
    "ha mandadu nudes",
    "ha probado más drogas",
    "tiene un fetiche con los pies",
    "lo ha hecho con dos personas distintas la misma noche",
    "tiene VIH",
    "se masturbó hoy",
    "ha soñado con la mamá de otro del grupo",
    "eyacula más (mililitros)",
    "se ha agarrado a 3 mujeres la misma noche",
    "fue el último en tener un sueño humedo",
    "ha tenido más pololas",
    "se ha acostado con la amiga de un amigo",
    "puede eyacular más lejos",
    "se ha acostado con una compañera de trabajo",
    "hace más caca durante el día",
    "ha salido con más tinders",
    "se ha meado encima de grande",
    "ha tenido sexo anal",
    "le gusta ir abajo en la cama",
    "usa más juegos sexuales",
    "es mas procrastinador",  
    "mas le encanta chupar vagina",
    "mas le gusta chupar ano",
    "manejar con alcohol",
    "lleva más tiempo sin follar",
    "ha tenido un trio",
    "jurar amor eterno para ganarse",
    "ha mentido sobre su orientación sexual para evitar una cita/salida",
    "ha simulado un orgasmo",
    "se ha sacado la última selfie cagando",
    "se ha limpiado el culo con un calcetin",
    "se ha enamorado de la jefa",
    "se ha masturbado aca",
    "esta sin calzoncillo",
    "ha vomitado a alguien mientras esta curado",
    "se lo han llevado preso",
    "se ha agarrado a mocha",
    "ha terminado una relación por celular",
    "se ha masturbado en el baño de la oficina",
    "ha tenido sexo en la cama de sus viejos",
    "Se masturba con la diestra",
    "Fue el Ultimo en tener sexo",
    "Le guata Justin bieber",
    "Es el proximo en irae preso",
    "El ultimo en fumar mota",
    "Es el primero en Hacerse un rasta",
    "Se podría hacer un tatuaje curado",
    "Podría disfrazarse de conejito en la cama",
    "Tiene sexo con roles",
    "Se ha hecho  caca curado",
    "Se masturba mirándose al espejo",
    "Le encanta la duchaja",
    "Le encanta la vladimir (paja y a dormir)",
    "Le gusta el hentai",
    "Se toca el pezón al masuturbarse",
    "Le envia el mensaje mas curao a su polola antes de dormir",
    "Se ha masturbado en un avión",
    "Ha tirado en un auto",
    "Le han hecho sexo oral manejando",
    "Le gusta masturbarse o tener sexo en lugares raros",
    "Se tira mas pedos",
    "Ha apagado tele más veces",
    "No le gusta tomar y toma por presión social",
    "No le gusta la cerveza",
    "Tiene las uñas del pie mas largas",
    "Tiene el pico más grande",
    "Tiene el pico más chico",
    "Se ha despertado cagado",
    "Hace mejor un asado",
    "Tiene más ropa ajena en su closet",
    "Tiene ahora los calzoncillos con caca",
    "El ultimo en saltar la mata al seco",
    "Se ha probado los sostenes de la hermana",
    "Es el siguiente en casarse",
    "Cocina mejor",
    "Se tira pedos con caca",
    "Se haría cura",
    "Se repite más los calzoncillos",
    "La tiene depilada",
    "Ha tratado de chupársela",
    "Se podría teñir el pelo rubio",
  ]

  return (
    <div className="App">"
      <header className="App-header">
        <h1 style={{color: "#e91e63", fontFamily: "Cursive"}}> Adivina quien ...</h1>
        <p  style={{fontFamily: "Cursive", fontSize: "30px"}}> {questions[count]} </p>
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
