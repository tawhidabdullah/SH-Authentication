import React from "react";
import BdFlag from "../img-comp/BdFlag";

const MobileFeildGroup = ({
  name,
  placeholder,
  type,
  onChange,
  value,
  error,
}) => {
  const iconClassesforMobileInput = 'fa fa-check-circle form-items-iconmobile--end'
  return (
    <div className="form-items">
      <label className="form-items__lable">Phone No:</label>
      <input
        type={type}
        className={error.length > 0 ? "error" : "input"}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        id='inputFeild'
      />
      <BdFlag className="form-items-flag" />
      <i
        className={!error && value && value.length > 0 ?
          `${iconClassesforMobileInput}--active` : iconClassesforMobileInput
        }
      >

      </i>
      <label className="errorMessage">
        {error}
      </label>
    </div>
  );
};


export default MobileFeildGroup;
