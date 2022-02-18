import React, { useState } from "react";
import { Button } from './Button';
import './Navbar.css';
import { Link } from "react-router-dom";
import Dropdown from './Dropdown';
import imgaigg from "./img/abraham.jpg";

export default function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const habdleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () =>{
       if(window.innerWidth < 960){
          setDropdown(false);
       }else{
         setDropdown(true);
       }
    }

    const onMouseLeave = () =>{
      if(window.innerWidth < 960){
         setDropdown(false);
      }else{
        setDropdown(false);
      }
   }

    return(
        <>
          <nav className="navbar">
            <Link to="/" className="navbar-logo">
                <img src={imgaigg}/>Portafolio
            </Link>

            <div className="menu-icon" onClick={habdleClick}>
               <i className={click ? "fas fa-times" : "fas fa-bars"}/>
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                      Home
                  </Link>
               </li>

               {/*<li className="nav-item">
                  <Link to="/bloc" className="nav-links" onClick={closeMobileMenu}>
                      Bloc
                  </Link>
               </li>*/}

               <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                      Servicios <i className="fa fa-caret-down"/>
                  </Link>
                  {dropdown && <Dropdown/>}
               </li>

               <li className="nav-item">
                  <Link to="/contacto" className="nav-links" onClick={closeMobileMenu}>
                     Contact
                  </Link>
               </li>
            </ul>
            <Button/>
          </nav>
        </>
    )
}