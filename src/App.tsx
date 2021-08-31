import React, { useEffect } from 'react';
import './App.css';
import logo from './Assets/Images/star_wars_logo.png'
import { useState } from 'react';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() =>{
    fetch('/time').then(res => res.json()).then(data =>{
      setCurrentTime(data.time);
    })
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the front-end of this project!
        </p>
        <p>The current time is {currentTime}.</p>
      </header>
    </div>
  );
}

export default App;
