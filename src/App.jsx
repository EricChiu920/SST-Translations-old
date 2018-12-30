import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/router/AppRouter';

function App() {
  return (
    <>
      <div className="background">
        <div className="App">
          <Router>
            <AppRouter />
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
