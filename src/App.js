import './APIs.js';
import './App.css';
import React, {useEffect, useState} from 'react';
import logo from './assets/HistoricolorLogo.svg';
import starry from './assets/starry_night.jpg';

const Circle = ({ color, setColor }) => (
  <div style={{
    width: '15vh',
    height: '15vh',
    backgroundColor: color,
    borderRadius: '50%',
    display: 'inline-block',
    // position: 'absolute',
    margin: '10px'
  }} />
);
 
function App() {

  //consts for playing the game
  const [imgUrl, setImgUrl] = useState('');
  const [topColors, setTopColors] = useState([]);
  const [colorGuesses, setColorGuesses] = useState({});
  const [calculatedScore, setCalculatedScore] = useState(null);
  const [circleColor1, setCircleColor1] = useState('#18506e');
  const [circleColor2, setCircleColor2] = useState('#0b2932');
  const [circleColor3, setCircleColor3] = useState('#cbdba6');
  //these circles are initialized at first to the most common colors in the starry night, to give the user some context to the nature of the game

  return (
    <div className="App">
      <main class="control"
    >
      <div class="navbar" id='logo'>
         <img className="logo" src={logo} alt="Logo"/>
      </div>
      <div className="game">
        <img id="framed" className="framed" src={starry} alt="framed picture for color game"/>
        <div className="colors">
        <Circle color={circleColor1} setColor={setCircleColor1}></Circle>
        #<input type="text" className="colorInput" id="color1" maxLength={6} placeholder='Enter Hex code...'></input>
        <br></br>
        <Circle color={circleColor2} setColor={setCircleColor2}></Circle>
        #<input type="text" className="colorInput" id="color2" maxLength={6} placeholder='Enter Hex code...'></input>
        <br></br>
        <Circle color={circleColor3} setColor={setCircleColor3}></Circle>
        #<input type="text" className="colorInput" id="color3" maxLength={6} placeholder='Enter Hex code...'></input>
        </div>
        <button id="startButton">Start Playing</button>

      </div>
    </main>
    </div>
  );
}

export default App;
