import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../img-comp/Logo";
import MobileFeildGroup from "../commonFeilds/MobileFeildGroup";
import BtnFullWidth from "../Button/BtnFullWidth";
import BtnSpinner from "../Button/BtnSpinner";
import { checkIfUserExists } from "../../actions/authAction";
const SignInSignUP = (props) => {
  console.log('userexists states', props.userExists)
  const { isLoading } = props.userExists

  const [fromValues, setFormValues] = React.useState({
    mobile: "",
    formErrors: {
      mobile: ""
    }
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const { mobile } = fromValues;
    const formErrors = { ...fromValues.formErrors };
    if (mobile.length < 11) {
      formErrors.mobile = "Minimum 11 digits required"
    }

    if (formErrors.mobile) {
      setFormValues({
        ...fromValues,
        formErrors
      });
    }

    else {
      props.checkIfUserExists(mobile, props.history);
      setFormValues({
        ...fromValues,
        mobile: ""
      });
    }
  };

  const handleChange = e => {
    const target = e.target;
    const { name, value } = target;

    console.log(`${name} ---- ${value}`)
    let formErrors = { ...fromValues.formErrors };
    switch (name) {
      case "mobile":
        formErrors.mobile =
          value.length < 11 ? "Minimum 11 digits required" : "";
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
          <BtnFullWidth
            className='btn-fullwidth btn-fullwidth--white'
            handle={handleSubmit}
            disabled={!fromValues.mobile ? true : false || isLoading}
          >
            {isLoading ? <BtnSpinner /> : 'Sign In / Sign Up'}
          </BtnFullWidth>
        </form>
      </div>
    </div>
  )
}

const mapStateToProp = (state) => {
  return {
    userExists: state.userExists
  }
};


export default connect(mapStateToProp, { checkIfUserExists })(withRouter(SignInSignUP)); 
