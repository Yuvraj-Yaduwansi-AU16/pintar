import logo from '../logo.svg';
import './App.css';
import React from 'react';
import { API } from '../config';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>API URL : {API}</p>
      </header>
    </div>
  );
}

export default App;
