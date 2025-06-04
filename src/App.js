import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
  const sendCommand = async () => {
      const response = await fetch('http://localhost:8080/api/robot/send-command',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify("MOVE_FORWARD")
        }
      );
      const data = await response.json();
      console.log(data);
  }

  return (
    <div>
      <h1> Wave Rover Control Panel</h1>
      <button onClick={sendCommand}>Send MOVE_FORWARD</button>
    </div>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
