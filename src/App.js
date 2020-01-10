import React from 'react';
import logo from './SS.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Profit Calculator</h1>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Profit Calculator
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      <input/>
      <input/>
      <select>
        <option>ski shop</option>
        <option>snowboard shop</option>
        <option>ski + snowboard shop</option>
      </select>
      <button>Calculate</button>
      </header>
    </div>
  );
}

export default App;
