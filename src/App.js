import './APIs.js';
import './App.css';
import React, {useEffect, useState} from 'react';
import logo from './assets/HistoricolorLogo.svg';
import starry from './assets/starry_night.jpg';
import { getRandomArtworkUrl } from './APIs.js';


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
  
  function toggleVisibility(component){
    var element = document.getElementById(component).style;
    // console.log(element.visibility);
    if(element.visibility == 'hidden' || element.visibility == ''){
      element.visibility = 'visible';
    }else{
      element.visibility = 'hidden';
    }
  }
  
  //consts for playing the game
  const [imgUrl, setImgUrl] = useState('');
  const [colorGuess, setColorGuess] = useState('');
  const [colorGuess2, setColorGuess2] = useState('');
  const [colorGuess3, setColorGuess3] = useState('');
  const [calculatedScore, setCalculatedScore] = useState(0);
  const [circleColor1, setCircleColor1] = useState('#18506e');
  const [circleColor2, setCircleColor2] = useState('#0b2932');
  const [circleColor3, setCircleColor3] = useState('#cbdba6');
  //these circles are initialized at first to the most common colors in the starry night, to give the user some context to the nature of the game
  
  useEffect(() => {
    setColorGuess('')
    setColorGuess2('')
    setColorGuess3('')
    console.log(imgUrl)
  }, [imgUrl])

  return (
    <main>
      <div className="navbar">
        <img className="logo" src={logo} alt="Logo"/>
      </div>
      <div>
        <div className="container">
          <div className="leftHalf">
            <div className="item">
              <img className="frame" src={imgUrl ? imgUrl : starry}></img>
            </div>
            <div className="colors">
              <div className="item">
                <Circle color={circleColor1}></Circle>
                <input className="input" id="input" htmlFor={colorGuess} type="text" maxLength={6} placeholder="Enter hex code..."></input>
              </div>
              <div className="item">
                <Circle color={circleColor2}></Circle>
                <input className="input" id="input2" htmlFor={colorGuess2} type="text" maxLength={6} placeholder="Enter hex code..."></input>
              </div>
              <div className="item">
                <Circle color={circleColor3}></Circle>
                <input className="input" id="input3" htmlFor={colorGuess3} type="text" maxLength={6} placeholder="Enter hex code..."></input>
              </div>
            </div>

          </div>
          <div className="rightHalf">
            <div className='item item2'>
              <button className="button button2" onClick={() => {
                toggleVisibility('startButton');
              }}>Submit Guess</button>
            </div>
            <div className="item item2">
              <button id="startButton" className="button" onClick={() => {
                const imgLinkPromise = getRandomArtworkUrl();
                imgLinkPromise.then(imgLink => {
                  setImgUrl(imgLink);
                }).catch(error => {
                  console.error("Error fetching artwork URL:", error);
                });
                toggleVisibility('startButton');
                toggleVisibility('startButton');//this has to happen twice because of rendering
                toggleVisibility("input");
                toggleVisibility('input2');
                toggleVisibility('input3');
              }}>Start Playing</button>
            </div>
            <div className="scoreDisplay" score={calculatedScore}>
              Score: {calculatedScore}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
