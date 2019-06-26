import React from 'react';
import logo from '../../BWLogo.png';

function Header() {
  return (
    <div className="contianer-fluid text-center" style={{background:"#7ACEB4"}}>
      <img className="logo-calculator p-4" src={logo} alt="" />
    </div>
  );
}
export default Header;
