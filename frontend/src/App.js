// frontend/src/App.js
import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  // axios(/api/posts).then((response) => {});
  const makeApiRequest = () => {
    axios('/api/testwithcurrentuser').then((responce) => {
      console.log('response', responce);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Я в режиме разработки!!!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={makeApiRequest}>Делаю запрос на api</button>
      </header>
    </div>
  );
}

export default App;
