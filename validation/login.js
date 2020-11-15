const isEmpty = require("./is-empty");

const Validator = require("validator");

module.exports = function validateLoginInput(data) {
  let errors = {};
  //to convert any null values to string so that we can use Validator methods on it

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Invalid email";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "password field is required ";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "email field is required ";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
