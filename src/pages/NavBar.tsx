import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

interface NavBarProps {
  links: { path: string; component: React.ComponentType<any>; label: string }[];
}

 
const NavBar: React.FC<NavBarProps> = ({links}) => {
// State to track screen width
const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

const [isOpen, setIsOpen] = useState(false);

// Update window width on resize
const handleResize = () => {
  setWindowWidth(window.innerWidth);
};

useEffect(() => {
  // Add event listener for window resize
  window.addEventListener('resize', handleResize);

  // Cleanup on unmount
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []); // Empty dependency array means this effect runs only on mount and unmount

// Define a breakpoint for when to show/hide the hamburger menu
const breakpoint = 555; // Change this to your desired breakpoint

return (
  <nav className="bg-[#34d399] flex flex-col justify-between px-4 py-6 shadow-xl">
    {/* Check if window width is less than the breakpoint to render the hamburger menu */}
    {windowWidth < breakpoint ? (
      <div className="hamburger-menu" id="sidebar-menu">
          <nav>
            <ul>
            </ul>
          </nav>
    </div>
    ) : (
      /* Render other navbar elements */
      <nav>
      <ul className="flex" id="sidebar-menu">
      {links.map((link, index) => (
        <li key={index} className="mr-4">
          <Link to={link.path}>{link.label}</Link>
        </li>
      ))}
    </ul>
  </nav>
    )}
    </nav>
    );
  };

export default NavBar;
