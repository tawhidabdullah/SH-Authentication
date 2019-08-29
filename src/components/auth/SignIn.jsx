import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../img-comp/Logo";
import MobileFeildGroup from "../commonFeilds/MobileFeildGroup";
import PasswordFeildGroup from "../commonFeilds/PasswordFeildGroup";
import CheckboxFeildGroup from "../commonFeilds/CheckboxFeildGroup";
import BtnFullWidth from "../Button/BtnFullWidth";
import BtnSpinner from "../Button/BtnSpinner";
import { signInUser } from "../../actions/authAction";
import Snackbar from '@material-ui/core/Snackbar';
import SnackBarcomp from "../../utilities/SnackBarcomp";


const SignIn = (props) => {
  const [tobbleType, setToggleType] = React.useState(true);
  const [fromValues, setFormValues] = React.useState({
    mobile: "",
    password: "",
    isRememberme: false,
    formErrors: {
      mobile: "",
      password: "",
      isRememberme: false
    }
  });
  const { isLoading, isErrorWhenAuthenticating } = props.auth;
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (isErrorWhenAuthenticating) {
      setOpen(true);
    }
  }, [isErrorWhenAuthenticating]);


  console.log('errr', isErrorWhenAuthenticating);

  const handleSubmit = e => {
    e.preventDefault();
    const { mobile, password } = fromValues;
    const formErrors = { ...fromValues.formErrors };
    if (mobile.length < 11) {
      formErrors.mobile = "Minimum 11 digits required"
    }
    if (password.length < 6) {
      formErrors.password = "Minimum 6 characaters required"
    }


    if (formErrors.mobile && formErrors.password) {
      setFormValues({
        ...fromValues,
        formErrors
      });
    }
    else {
      props.signInUser({ mobile, password }, props.history)
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
    let formErrors = { ...fromValues.formErrors };
    console.log(formErrors);

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
      formErrors,
      [name]: value
    });

  };

  const goAndResetPass = () => {
    props.history.push('/forgot-password')
  }

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  return (
    <div className='authContainer'>
    <div className="mainContent">
      <div className="signin__head">
        <Logo />
        <h1 className="signin__head__title">
          Enter the SobHobe Universe!
      </h1>
      </div>
      <form className="form" >
        <MobileFeildGroup
          name='mobile'
          placeholder='0154654547'
          type='tel'
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
        <CheckboxFeildGroup
          name='isRememberme'
          type='checkbox'
          onChange={handleChange}
          value={fromValues.isRememberme}
          error={fromValues.formErrors.isRememberme}
          label='Remember me'
        />

        <BtnFullWidth
          className='btn-fullwidth btn-fullwidth--yellow'
          handle={handleSubmit}
        >
          {isLoading ? <BtnSpinner /> : "Sign In"}

        </BtnFullWidth>
        <p className="form__forgetpassword-text"
          style={{ corsor: 'pointer' }}
          onClick={goAndResetPass}>
          Forgot Password?
        </p>
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
          message="Incorrect Mobile number or password.Please try again!"
        />
      </Snackbar>
    </div>
    </div>
  )
}


const mapStateToProp = (state) => {
  return {
    auth: state.auth
  }
};


export default connect(mapStateToProp, { signInUser })(withRouter(SignIn));
