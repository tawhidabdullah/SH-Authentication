import React from 'react';
import MobileFeildGroup from "../commonFeilds/MobileFeildGroup";
import BtnFullWidth from "../Button/BtnFullWidth";
import BtnSpinner from "../Button/BtnSpinner";
import { forgetPasswordSearchAction } from "../../actions/forgotPasswordAction";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";


const ForgotPasswordSearch = (props) => {
  const [fromValues, setFormValues] = React.useState({
    mobile: "",
    formErrors: {
      mobile: "",
    }
  });

  const { isLoading, isUserExists } = props.forgotPassword

  const handleSubmit = e => {
    e.preventDefault();
    const { mobile } = fromValues;
    const formErrors = { ...fromValues.formErrors };
    if (mobile.length < 11) {
      formErrors.mobile = "Minimum 11 digits required"
    }

    setFormValues({ ...fromValues, formErrors });

    props.forgetPasswordSearchAction(mobile, props.history);

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
    <div className="forgotPassword">
      <div className="forgotPassword__head">
        <h1 className="forgotPassword__head__title">
          <span> <i className='fa fa-lock'> </i></span>
          Forgot Your Password?
      </h1>
      </div>
      <div className='forgotPassword__subhead'>
        <p>
          Confirm your phone number to recive a varification code
        </p>
      </div>
      <div className="forgotPassword__foot">
        <MobileFeildGroup
          name='mobile'
          placeholder='0154654547'
          type='tel'
          onChange={handleChange}
          value={fromValues.mobile}
          error={fromValues.formErrors.mobile}
        />
        <BtnFullWidth
          className='btn-fullwidth btn-fullwidth--yellow'
          handle={handleSubmit}
        >
          {isLoading ? <BtnSpinner /> : "Send Verification Code"}

        </BtnFullWidth>
        <p className="forgotPassword__foot__text">
          Back
      </p>
      </div>
    </div>
  )
}

const mapStateToProp = (state) => {
  return {
    forgotPassword: state.forgotPassword
  }
}

export default connect(mapStateToProp, { forgetPasswordSearchAction })(withRouter(ForgotPasswordSearch)); 
