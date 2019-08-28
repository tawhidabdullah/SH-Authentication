const formValidator = (formErrors) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  
  return valid;
};

export default formValidator; 