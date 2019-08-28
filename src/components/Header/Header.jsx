import React from 'react';
import Logo from "../img-comp/Logo";
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <Logo src="./img/userlogo.ico" className="header__logo" />
      </div>
      <a href="#" className="header__button">
        Contact Us
    </a>
    </header>
  )
}

export default Header; 
