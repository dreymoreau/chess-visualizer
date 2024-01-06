import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

interface NavbarProps {
  links: { path: string; component: React.ComponentType<any>; label: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <header>
      <button id="hamburger-menu"></button>
       <nav className="bg-[#34d399] flex flex-col justify-between px-4 py-6 shadow-xl" >
        <ul className="flex" id="sidebar-menu">
        {links.map((link, index) => (
          <li key={index} className="mr-4">
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
    </header>
  );
};

export default Navbar;
