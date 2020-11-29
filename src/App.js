import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from 'routing-component';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <Routing />
        </header>
        <body>
        </body>
      </div>
    </BrowserRouter>
  );
}

export default App;
