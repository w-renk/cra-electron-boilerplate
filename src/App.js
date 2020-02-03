import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is a skeleton based on Create React App and Electron. It uses Electron Builder for packaging.</p>
        <p>Hot module replacement is already enabled. To get started, edit src/App.js and save to update this window.</p>
      </header>
    </div>
  );
}

export default App;
