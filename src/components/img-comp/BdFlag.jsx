import React from 'react';
import logo from "./bangladeshiflag.ico";

const BdFlag = ({ className }) => {
  return (
    <img src={logo} alt='logo' className={className} />
  )
}

BdFlag.defaultProps = {
  className: ""
}

export default BdFlag
