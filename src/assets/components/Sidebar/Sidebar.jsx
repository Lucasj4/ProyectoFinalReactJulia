import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import GamepadIcon from '@mui/icons-material/Gamepad';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from "react-router-dom";
import './Sidebar.css'


const Sidebar = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);

  const handleSidebar = () => {
    setisOpen(!isOpen);
  };

  const menuItems = [
    {
      path: "/",
      name: "Inicio",
      icon: <HomeIcon />,
    },
    {
      path: "/categoria/2",
      name: "Perifericos",
      icon: <GamepadIcon />,
    },
    {
      path: "/categoria/1",
      name: "Procesadores",
      icon: <DeveloperBoardIcon />,
    },
    {
      path: "/cart",
      name: "Cart",
      icon: <ShoppingCartIcon />,
    },
  ];

  return (
    <div className="container">
      <div className={`sidebar ${isOpen ? "sidebar-expanded" : "sidebar-collapsed"}`}>
        <div className={isOpen ? "top-section top-section__active" : "top-section"}>
          <h2 className={isOpen ? "logo logo-active" : "logo logo-inactive"}>CoderGamer</h2>
          <div className="bars">
            <MenuIcon className="bars-icon" fontSize="large" onClick={handleSidebar} />
          </div>
        </div>

        {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className='link'
          >
            <div className='icon'>{item.icon}</div>
            <div className={`link_text ${isOpen ? "link_text-inactive" : "link_text-active"}`}>{item.name}</div>
          </NavLink>
        ))}
      </div>

      <main>
        {children}
      </main>
    </div>
  );
};

export default Sidebar;

