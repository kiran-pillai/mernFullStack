const isEmpty = require("./is-empty");

const Validator = require("validator");

module.exports = function validateExperienceInput(data) {
  let errors = {};
  //to convert any null values to string so that we can use Validator methods on it

  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.from = !isEmpty(data.from) ? data.from : "";
  data.fieldOfStudy = !isEmpty(data.fieldOfStudy) ? data.fieldOfStudy : "";


  if (Validator.isEmpty(data.school)) {
    errors.school = "School field is required";
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree field is required";
  }

  if (Validator.isEmpty(data.fieldOfStudy)) {
    errors.fieldOfStudy = "Field of study field is required";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  }
 

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
