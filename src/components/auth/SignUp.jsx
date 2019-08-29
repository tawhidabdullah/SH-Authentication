import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../img-comp/Logo";
import MobileFeildGroup from "../commonFeilds/MobileFeildGroup";
import PasswordFeildGroup from "../commonFeilds/PasswordFeildGroup";
import BtnFullWidth from "../Button/BtnFullWidth";
import BtnSpinner from "../Button/BtnSpinner";
import Snackbar from '@material-ui/core/Snackbar';
import SnackBarcomp from "../../utilities/SnackBarcomp";
// Acions
import { signUpUser } from "../../actions/authAction";

const SignUp = (props) => {

  const [tobbleType, setToggleType] = React.useState(true);
  const [fromValues, setFormValues] = React.useState({
    mobile: "",
    password: "",
    formErrors: {
      mobile: "",
      password: "",
    }
  });

  const showSnackBar = props.location.state && props.location.state.isUserNotFound ? true : false;
  const [open, setOpen] = React.useState(showSnackBar);
  const { isLoading } = props.auth;

  const handleSubmit = e => {

    const { password } = { ...fromValues };
    const { mobile } = { ...fromValues };

    const formErrors = { ...fromValues.formErrors };

    console.log('mobile', mobile);

    if (!mobile.length > 0) {
      formErrors.mobile = "mobile Number is required"
    }
    if (!mobile.length > 0) {
      formErrors.password = "Password Feild is required"
    }


    if (formErrors.mobile && formErrors.password) {
      setFormValues({
        ...fromValues,
        formErrors
      });
    }
    else {
      props.signUpUser({ mobile, password }, props.history);
      setFormValues({
        ...fromValues,
        mobile : "", 
        password: ""
      });
    }
  };


  const hangleToggleType = () => {
    setToggleType(!tobbleType)
  };

  const handleChange = e => {
    const target = e.target;
    const { name, value } = target;



    console.log(`${name} ---- ${value}`)
    let formErrors = { ...fromValues.formErrors }

    switch (name) {
      case "mobile":
        formErrors.mobile =
          value.length < 11 ? "Minimum 11 digits required" : "";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "Minimum 6 characaters required" : "";
        break;
      default:
        break;
    }


    setFormValues({
      ...fromValues,
      [name]: value,
      formErrors
    });


  };

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  return (
    <div className="mainContent">
      <div className="signin__head">
        <Logo />
        <h1 className="signin__head__title">
          Enter the SobHobe Universe!
      </h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <MobileFeildGroup
          name='mobile'
          placeholder='0154654547'
          type='text'
          onChange={handleChange}
          value={fromValues.mobile}
          error={fromValues.formErrors.mobile}
        />
        <PasswordFeildGroup
          name='password'
          type={tobbleType ? "password" : 'text'}
          className={fromValues.formErrors.password.length > 0 ? "error" : "input"}
          placeholder="Password"
          onChange={handleChange}
          value={fromValues.password}
          error={fromValues.formErrors.password}
          handleShowPassword={hangleToggleType}
          label='Password:'
        />

        <BtnFullWidth
          className='btn-fullwidth btn-fullwidth--yellow'
          handle={handleSubmit}
        >
          {isLoading ? <BtnSpinner /> : 'Sign Up'}
        </BtnFullWidth>
      </form>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <SnackBarcomp
          onClose={handleClose}
          variant="error"
          message="Mobile number not Found. Sign UP!"
        />
      </Snackbar>
    </div>
  )
}


const mapStateToProp = (state) => {
  return {
    auth: state.auth
  }
};


export default connect(mapStateToProp, { signUpUser })(withRouter(SignUp));


