import logo from '../logo.svg';
import './App.css';
import React from 'react';
import { API_URL, CURRENT_ENV } from '../config';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>API URL : {API_URL}</p>
        <p>Current Environment : {CURRENT_ENV}</p>
      </header>
    </div>
  );
}

export default App;
