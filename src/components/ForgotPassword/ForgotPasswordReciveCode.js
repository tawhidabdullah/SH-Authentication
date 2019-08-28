import React from 'react';
import BtnFullWidth from "../Button/BtnFullWidth";
import BtnSpinner from "../Button/BtnSpinner";
import { SendVerificationCodeAction } from "../../actions/forgotPasswordAction";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

const ForgotPasswordReciveCode = (props) => {
  const [fromValues, setFormValues] = React.useState({
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    formErrors: {
      code: ""
    }
  });

  const { isLoading } = props.forgotPassword;

  const handleSubmit = e => {
    e.preventDefault();
    const { code1, code2, code3, code4 } = fromValues;
    const formErrors = { ...fromValues.formErrors };
    if (!code1 || !code2 || !code3 || !code4) {
      formErrors.code = "Please fill out all the code field"
    }

    setFormValues({ ...fromValues, formErrors });

    console.log('codes:', { code1, code2, code3, code4 });

    props.SendVerificationCodeAction({ code1, code2, code3, code4 }, props.history);
  };

  const handleChange = e => {
    const target = e.target;
    let { name, value } = target;
    setFormValues({
      ...fromValues,
      [name]: value
    });

    console.log(fromValues);
  };


  const handleKeyUp = (e) => {
    const regex = /^([a-zA-Z0-9_-]){2,1000}$/;
    let { name, value } = e.target;
    const code = fromValues[name].slice(0, 1);
    setFormValues({
      ...fromValues,
      [name]: value.replace(regex, code)
    });

  }


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
          Please enter the 4 digit code that has been sent to your
          phone to reset your password
        </p>
      </div>
      <div className="forgotPassword__foot">
        <div className='forgotPassword__varification'>
          <input
            name='code1'
            type='text'
            className='forgotPassword__varification-input'
            required
            onChange={handleChange}
            value={fromValues.code1}
            onKeyUp={handleKeyUp}
          />

          <input
            name='code2'
            type='text'
            className='forgotPassword__varification-input'
            required
            onChange={handleChange}
            value={fromValues.code2}
            onKeyUp={handleKeyUp}

          />
          <input
            name='code3'
            type='text'
            className='forgotPassword__varification-input'
            required
            onChange={handleChange}
            value={fromValues.code3}
            onKeyUp={handleKeyUp}
          />
          <input
            name='code4'
            type='text'
            className='forgotPassword__varification-input'
            required
            onChange={handleChange}
            value={fromValues.code4}
            onKeyUp={handleKeyUp}

          />
        </div>
        {/* <label className="forgotPassword__varification-error">
          {fromValues.formErrors.code === "" ? "" : fromValues.formErrors.code}
        </label> */}
        <p className='forgotPassword__varification-text'>
          Didn't recieve a code! <span>Resend</span>
        </p>
        <BtnFullWidth
          className='btn-fullwidth btn-fullwidth--yellow'
          handle={handleSubmit}
        >
          {isLoading ? BtnSpinner : 'Send Verification Code'}

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

export default connect(mapStateToProp, { SendVerificationCodeAction })(withRouter(ForgotPasswordReciveCode)); 
