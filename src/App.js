import React from 'react';
import './App.css';
import Home from './components/pages/Home'

import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Spaghetti from './components/pages/Spaghetti';
import Paper from './components/pages/Paper';
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path='/spaghetti' element={<Spaghetti/>}/>
          <Route exact path='/paper-bridge' element={<Paper/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
