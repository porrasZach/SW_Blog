import React, { useEffect } from 'react';
import './App.css';
// import logo from './Assets/Images/star_wars_logo.png'
// import { useState } from 'react';

// function App() {
//   const [currentTime, setCurrentTime] = useState(0);

//   useEffect(() =>{
//     fetch('/time').then(res => res.json()).then(data =>{
//       setCurrentTime(data.time);
//     })
//   }, []);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Welcome to the front-end of this project!
//         </p>
//         <p>The current time is {currentTime}.</p>
//       </header>
//     </div>
//   );
// }

const book_id = "8bba937a-313c-4920-9b3b-ee2ef8f11528"

function Books() {
  useEffect(() =>{
    fetch(`/api/books/${book_id}`).then(response =>
      response.json().then(data =>{
      console.log(data);
    })
    );
}, []);

  return <div />
}

export default Books;