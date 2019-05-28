import React from 'react';
import './App.css';
import AppRouter from '../../AppRouter';
import Header from '../Header';
import { BrowserRouter as Router } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
