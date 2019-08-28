import React from "react";


const PasswordFeildGroup = ({
  name,
  placeholder,
  type,
  onChange,
  value,
  error,
  handleShowPassword,
  label
}) => {

  return (
    <div className="form-items">
      <label className="form-items__lable">{label}</label>
      <input
        type={type}
        className={error.length > 0 ? "error" : "input"}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        id='inputFeild'
      />
      <i className="fa fa-lock form-items-icon"></i>
      <i
        onClick={handleShowPassword}
        className="fa fa-eye form-items-iconpassword--end"
      >
      </i>
      <label className="errorMessage">
        {error}
      </label>
    </div>
  );
};



PasswordFeildGroup.defaultProps = {
  error: ""
}
export default PasswordFeildGroup;
