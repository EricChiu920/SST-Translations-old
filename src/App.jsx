import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit src/App.js and save to reload.
          Test 2
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Container><p>Hello</p></Container>
      </header>
    </div>
  );
}

export default App;
