
import './App.css';
import NavBar from "./components/NavBar";
import "./style/landingPage.css"
import Intro from './components/Intro';
import Trending from './components/Trending';
import React from 'react';
import {Container} from 'react-bootstrap'

function App() {
  return (
    <div>
      <Container>
        <NavBar />
        <Intro />
        <Trending />
      </Container>
    </div>
    
  );
}

export default App;
