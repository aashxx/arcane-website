import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Technical from './pages/Technical';
import NonTechnical from './pages/NonTechnical';

const App = () => {

  const [openNav, setOpenNav] = useState(false);

  return (
    <Router>
      <MobileNavbar openNav={openNav} setOpenNav={setOpenNav} />
      <Navbar openNav={openNav} setOpenNav={setOpenNav} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/technical' element={<Technical />} />
        <Route path='/nontechnical' element={<NonTechnical />} />
        
      </Routes>
    </Router>
  )
}

export default App;