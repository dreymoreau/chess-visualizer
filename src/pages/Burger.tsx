import React from 'react'
import { StyledBurger } from './Burger.styled'
import { Link } from 'react-router-dom';

type Props = {
  open: boolean
  setOpen: (open: boolean) => void;
  onClick?: () => void;
  links: { path: string; component: React.ComponentType<any>; label: string }[];
}

const Burger: React.FC<Props> = ({ setOpen, open, links, onClick }) => {
  const handleClick = () => {
    setOpen(!open); // Toggle open state
    if (onClick) {
      onClick(); // Call additional onClick function if provided
    }
  };

  return (
    <StyledBurger open={open} onClick={handleClick}>
      <nav className="bg-[#34d399] flex flex-col justify-between px-4 py-6 shadow-xl" >
        <ul className="flex" id="sidebar-menu">
          {links.map((link, index) => (
            <li key={index} className="mr-4">
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </StyledBurger>
  );
};

export default Burger;
