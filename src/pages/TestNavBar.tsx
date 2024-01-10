import React, { useState, useEffect } from 'react';
import '../index.css';

// Define types for props
interface NavbarProps {
    links: { path: string; component: React.ComponentType<any>; label: string }[];
  }

const TestNavbar: React.FC<NavbarProps> = () => {
  // State to track screen width
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

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
  const breakpoint = 768; // Change this to your desired breakpoint

  return (
    <nav>
      {/* Check if window width is less than the breakpoint to render the hamburger menu */}
      {windowWidth < breakpoint ? (
        <div className="hamburger-menu">
            {/* <ul>
                <li>Home</li>
                <li>About</li>
                <li>Profile</li>
            </ul> */}
          <span>&#9776;</span>
        </div>
      ) : (
        /* Render other navbar elements */
        <div className="other-navbar-elements">
          {/* Other navbar content */}
        </div>
      )}
    </nav>
  );
};

export default TestNavbar;
