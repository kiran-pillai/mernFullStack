const isEmpty = require("./is-empty");

const Validator = require("validator");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  //to convert any null values to string so that we can use Validator methods on it
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.name, 2, 50)) {
    errors.name = "Name must be between 2 and 50 characters";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "email field is required ";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "invalid email";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "password field is required ";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 and 30 characters ";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required ";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
