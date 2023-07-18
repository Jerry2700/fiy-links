import React, { useState } from 'react';
import { FaBarsFaFlickr,  } from "react-icons/fa";
import {AiFillHome} from "react-icons/ai"
import {FcAbout} from "react-icons/fc"
import {MdPayments} from "react-icons/md"
import {BiLogOut} from "react-icons/bi"




import { CSSTransition } from 'react-transition-group';
import './navbar.css';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="menu-toggle" onClick={toggleNavbar}>
        <FaBars />
      </div>
      <CSSTransition in={isOpen} classNames="navbar-links" timeout={300} unmountOnExit>
        <ul className="navbar-links">
          <li>
            <a href="#">
              <FcAbout/>
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillHome/> 
            </a>
          </li>
          <li>
            <a href="#">
              <MdPayments/>
            </a>
          </li>
          <li>
            <a href="#">
              <BiLogOut />
            </a>
          </li>
        </ul>
      </CSSTransition>
    </nav>
  );
};

export default Navbar;
