import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';

const App = () => {

  const [openNav, setOpenNav] = useState(false);

  return (
    <Router>
      <MobileNavbar openNav={openNav} setOpenNav={setOpenNav} />
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      <Routes></Routes>
    </Router>
  )
}

export default App;