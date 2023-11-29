// import About from "./About";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <>
//   <nav >
//    <ul>
//     <li><Link to="/about">{About}</Link></li>
//    </ul>
//   </nav>
//   </>
//   );
// };

// export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  links: { path: string; component: React.ComponentType<any>; label: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <header>
    <nav className="bg-[#34d399] flex flex-col justify-between px-4 py-6 shadow-xl">
      <ul className="flex">
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