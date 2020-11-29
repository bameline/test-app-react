import Calculator from 'components/calculator-component';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>This is the main component</div>
        <Calculator />
      </header>
    </div>
  );
}

export default App;
