import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import React from "react";
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="content">
      <Routes >
        <Route path="/" element={ <Home/>} />
       </Routes>  
      </div>

  </div>
  );
}

export default App;
