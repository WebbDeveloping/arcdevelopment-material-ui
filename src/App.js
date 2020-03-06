import React from 'react';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant='contained'>Click Me!</Button>
      </header>
    </div>
  );
}

export default App;
