import React from 'react';
import './App.css';
import AppRouter from '../../AppRouter';
import Header from '../Header';
import { BrowserRouter as Router } from "react-router-dom";
import styled from 'styled-components';

const RouterStyle = styled.div`
margin-top: 45px;
`
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <RouterStyle>
          <AppRouter />
        </RouterStyle>
      </Router>
    </div>
  );
}

export default App;
