import React from "react";


const CheckboxFeildGroup = ({
  name,
  type,
  onChange,
  value,
  error,
  label
}) => {

  return (
    <div className="form-item">
      <div className="slide-two margin-top">
        <input type="checkbox"
          id="slide-two"
          name={name}
          onChange={onChange}
          value={error.password}
        />
        <label htmlFor="slide-two">{label}</label>
      </div>
    </div>
  );
};


export default CheckboxFeildGroup; 
