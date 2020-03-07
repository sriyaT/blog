import React from 'react'

import "./style.css";
/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
   <header className="header">
       <nav className="headerMenu">
        <a href="#" alt="home">Home</a>
        <a href="#" alt="about us">About Us</a>
        <a href="#" alt="contact us">Contact Us</a>
       </nav>
       <div>
           Social Media Links
       </div>
   </header>
   )

 }

export default Header;
