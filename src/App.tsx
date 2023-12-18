import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/NavBar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import ChessProfile from './pages/ChessProfile';
import ChessStatsTest from './pages/ChessStatsTest';
// import Test from './pages/Test'

const App: React.FC = () => {
  const navLinks = [
    { path: '/', component: HomePage, label: 'Home' },
    { path: '/about', component: About, label: 'About' },
    { path: '/profile', component: ChessProfile, label: 'Profile' },
    { path: '/test', component: ChessStatsTest, label: 'ChessStatsTest'}
  ];

  return (
    <Router>
      <Navbar links={navLinks} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<ChessProfile />} />
        <Route path="/test" element={<ChessStatsTest/>} />
      </Routes>
    </Router>
  );
};

export default App;