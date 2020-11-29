import Calculator from 'calculator-components/calculator-component';
import { WelcomeDialog } from 'composition-components/welcome-dialo-component';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>This is the main component</div>
        <WelcomeDialog/>
        <Calculator />
      </header>
    </div>
  );
}

export default App;
