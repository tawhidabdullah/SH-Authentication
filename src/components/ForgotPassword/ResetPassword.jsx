import React from 'react';
import PasswordFeildGroup from "../commonFeilds/PasswordFeildGroup";
import BtnFullWidth from "../Button/BtnFullWidth";
import BtnSpinner from "../Button/BtnSpinner";
import { resetUserPassword } from "../../actions/resetPasswordAction";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";


const ResetPassword = (props) => {
  const [toggleType, setToggleType] = React.useState(true);
  const [fromValues, setFormValues] = React.useState({
    newPassword: "",
    confirmPassword: "",
    formErrors: {
      notSame: ''
    }
  });

  const { isLoading } = props.resetPassword;

  const handleSubmit = e => {
    e.preventDefault();
    const { newPassword, confirmPassword } = fromValues;
    const formErrors = { ...fromValues.formErrors };
    if (!newPassword || !confirmPassword) {
      formErrors.notSame = "Please fill the Password Feild"
    }
    else formErrors.notSame = ""
    if (formErrors.notSame) {
      setFormValues({
        ...fromValues,
        formErrors
      });
    }
    else {
      props.resetUserPassword({ newPassword, confirmPassword }, props.history);
      setFormValues({
        ...fromValues,
        newPassword: '', confirmPassword: '',
        formErrors: {
          notSame: ''
        }
      });

    }

  };




  const handleChange = e => {
    const target = e.target;
    const { name, value } = target;
    let { formErrors, newPassword, confirmPassword } = { ...fromValues };
    let tempConfirmPass = name === 'confirmPassword' ? value : "";
    let tempNewPass = name === 'newPassword' ? value : "";

    if (name === 'confirmPassword') {
      if (tempConfirmPass === newPassword) {
        formErrors.notSame = ""
      }
      else {
        formErrors.notSame = "Both password must be the same!"
      }
    }
    else if (name === 'newPassword') {
      if (tempNewPass === confirmPassword) {
        formErrors.notSame = ""
      } else {
        formErrors.notSame = "Both password must be the same!"
      }
    }

    setFormValues({
      ...fromValues,
      formErrors,
      [name]: value
    });
  };


  const hangleToggleType = () => {
    setToggleType(!toggleType)
  };


  return (
    <div className='forgotPasswordContainer'>
      <div className="forgotPassword">
        <div className="forgotPassword__head">
          <h1 className="forgotPassword__head__title">
            <span> <i className='fa fa-lock'> </i></span>
            Forgot Your Password?
      </h1>
        </div>
        <div className='forgotPassword__subhead'>
          <p>
            Please enter the new password then your password will be reset! Don't forget again. :)
        </p>
        </div>
        <div className="forgotPassword__foot">
          <PasswordFeildGroup
            name='newPassword'
            type={toggleType ? "password" : 'text'}
            className={fromValues.formErrors.notSame &&
              fromValues.formErrors.notSame.length > 0
              ? "error" : "input"}
            placeholder="Enter your New Password"
            onChange={handleChange}
            value={fromValues.newPassword}
            handleShowPassword={hangleToggleType}
            label='New Password:'
          />
          <PasswordFeildGroup
            name='confirmPassword'
            type={toggleType ? "password" : 'text'}
            className={fromValues.formErrors.notSame &&
              fromValues.formErrors.notSame.length > 0
              ? "error" : "input"}
            placeholder="Enter your Confirm Password"
            onChange={handleChange}
            value={fromValues.confirmPassword}
            handleShowPassword={hangleToggleType}
            label='Confirm Password:'
          />
          <label className="errorMessage">
            {fromValues.formErrors.notSame ? fromValues.formErrors.notSame : ""}
          </label>
          <BtnFullWidth
            className='btn-fullwidth btn-fullwidth--yellow'
            handle={handleSubmit}
          >

            {isLoading ? <BtnSpinner /> : ' Reset Password'}
          </BtnFullWidth>
          <p className="forgotPassword__foot__text">
            Back
      </p>
        </div>
      </div>
    </div>
  )
}
const mapStateToProp = (state) => {
  return {
    resetPassword: state.resetPassword
  }
}

export default connect(mapStateToProp, { resetUserPassword })(withRouter(ResetPassword)); 