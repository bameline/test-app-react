import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Routing } from 'routing-component';
import './App.css';
import 'react-toastify/dist/ReactToastify.css'; 
import { NavigationBar } from 'navbar-components/navbar-component';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />  
      <div className="App">
        <header className="App-header">
        </header>
        <div className="App-body">
        <NavigationBar />
        <Routing />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
