import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/NavBar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Profile from './pages/Profile';
// import TestNavbar from './pages/TestNavBar';

const App: React.FC = () => {
  const navLinks = [
    { path: '/', component: HomePage, label: 'Home' },
    { path: '/about', component: About, label: 'About' },
    { path: '/profile', component: Profile, label: 'Profile' },
  ];

  return (
    <Router>
      <Navbar links={navLinks} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
