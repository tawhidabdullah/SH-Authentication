import React from 'react';
import logo from "./userlogo.ico";

const Logo = ({ className }) => {
  return (
    <img src={logo} alt='logo' className={className} />
  )
}


Logo.defaultProps = {
  className: ""
}


export default Logo
