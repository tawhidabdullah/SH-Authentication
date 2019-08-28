import React from 'react';

const BtnFullWidth = ({ handle, children, className, disabled = 'false' }) => {
  return (
    <a
      onClick={handle}
      href="#"
      className={className}
      disabled={disabled}
    >
      {children}
    </a>

  )
}

export default BtnFullWidth;
