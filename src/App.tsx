import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/NavBar';
import HomePage from './pages/HomePage';
import About from './pages/About';

const App: React.FC = () => {
  const navLinks = [
    { path: '/', component: HomePage, label: 'HomePage' },
    { path: '/about', component: About, label: 'About' }
  ];

  return (
    <Router>
      <Navbar links={navLinks} />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;