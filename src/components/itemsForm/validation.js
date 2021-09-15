const VALIDATION_MSGS = {
  required: 'Required'
}

const validation = (values) => {
  const errors = {};

  if (values.name === '') errors.name = VALIDATION_MSGS.required;
  if (values.size === '') errors.size = VALIDATION_MSGS.required;

  return errors;
}

export default validation;
