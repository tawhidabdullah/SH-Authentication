import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { logoutUser } from "../../actions/authAction";
import Logo from "../img-comp/Logo";


const Header = (props) => {

  const handleLogout = (e) => {
    e.preventDefault();
    props.logoutUser(props.history);
  };
  const handleGotoFirstPage = () => {
    props.history.push('/')
  }
  return (
    <header className="header">
      <div className="header__logo-box" onClick={handleGotoFirstPage}>
        <Logo src="./img/userlogo.ico" className="header__logo" />
      </div>
      <div>
        <a href="#" className="header__button">
          Contact Us
    </a>
        {props.auth.isAuthenticated ?
          <a
            onClick={handleLogout}
            href="#"
            className="header__button">
            Logout
          </a> : ""}
      </div>
    </header>
  )
}

const mapStateTopProp = (state) => {
  return {
    auth: state.auth
  }
};

export default connect(mapStateTopProp, { logoutUser })(withRouter(Header)); 
