import './APIs.js';
import './App.css';
import React, {useEffect, useState} from 'react';
import logo from './assets/HistoricolorLogo.svg';
import starry from './assets/starry_night.jpg';

const Circle = ({ color, setColor }) => (
  <div style={{
    width: '17vh',
    height: '17vh',
    backgroundColor: color,
    borderRadius: '50%',
    border: '4px solid black',
    margin: '10px'
  }} />
);
 
function App() {

  //consts for playing the game
  const [imgUrl, setImgUrl] = useState('');
  const [topColors, setTopColors] = useState([]);
  const [colorGuesses, setColorGuesses] = useState({});
  const [calculatedScore, setCalculatedScore] = useState(0);
  const [circleColor1, setCircleColor1] = useState('#18506e');
  const [circleColor2, setCircleColor2] = useState('#0b2932');
  const [circleColor3, setCircleColor3] = useState('#cbdba6');
  //these circles are initialized at first to the most common colors in the starry night, to give the user some context to the nature of the game

  return (
    <main>
      <div class="navbar">
        <img className="logo" src={logo} alt="Logo"/>
      </div>
      <body>
        <div className="container">
          <div className="leftHalf">
            <div className="item">
              <img className="frame" src={starry}></img>
            </div>
            <div className="colors">
              <div className="item">
                <Circle color={circleColor1} setColor={setCircleColor1}></Circle>
                <input className="input" for={circleColor1} type="text" maxLength={6} placeholder="Enter hex code..."></input>
              </div>
              <div className="item">
                <Circle color={circleColor2} setColor={setCircleColor2}></Circle>
                <input className="input" for={circleColor2} type="text" maxLength={6} placeholder="Enter hex code..."></input>
              </div>
              <div className="item">
                <Circle color={circleColor3} setColor={setCircleColor3}></Circle>
                <input className="input" for={circleColor3} type="text" maxLength={6} placeholder="Enter hex code..."></input>
              </div>
            </div>

          </div>
          <div className="rightHalf">
            <div className="item">
              <button className="button">Start Playing!</button>
            </div>
            <div className='item'>
              <button className="button">Submit Guess</button>
            </div>
          </div>
        </div>
      </body>
    </main>
  );
}

export default App;
