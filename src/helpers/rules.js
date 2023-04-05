export function ruleRequired(v) {
  return v != null ? true : 'Enter a correct value';
}

export function nameRules(value) {
  return value.length <= 48 ? true : 'Name must be less than 48 characters.';
}

export function descriptionRules(value) {
  return value.length === 0
    ? 'Fill the description please!'
    : value.length < 3
    ? 'description length must be atleast 3 characters'
    : value.length > 255
    ? 'description length must not exceed 255 characters'
    : true;
}
export function addressRules(value) {
  return value.length <= 255 ? true : 'Name must be less than 256 characters.';
}

export function emailRules(value) {
  if (/.+@.+\..+/.test(value)) return true;
  else return 'E-mail must be valid.';
}

export function passwordRules(value) {
  return value.length === 0
    ? 'Fill the password please!'
    : value.length < 8
    ? 'Password length must be atleast 8 characters'
    : value.length > 50
    ? 'Password length must not exceed 50 characters'
    : true;
}

export function phoneNumberRules(Value) {
  let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{5})$/;
  return phoneno.test(Value) && Value.length <= 11
    ? true
    : 'Enter Valid phoneNumber please';
}
