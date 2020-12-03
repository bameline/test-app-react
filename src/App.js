import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Routing } from 'routing-component';
import './App.css';
import 'react-toastify/dist/ReactToastify.css'; 
import { NavigationBar } from 'navbar-components/navbar-component';
import { LoadingIndicator } from 'loader-components/loader-indicator-component';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />  
      <div className="App">
        <header className="App-header">
        </header>
        <div className="App-body">
          <NavigationBar />
          <LoadingIndicator />
          <Routing />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
