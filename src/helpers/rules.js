export function ruleRequired(v) {
  return v != null ? true : 'invalid value ';
}

export function validateCustomerName(v) {
  if (v.length == 48) {
    return true;
  } else if (v.length > 48) {
    return 'please enter validate name!';
  } else {
    return 'This Field is Required!';
  }
}

// export {
//   nameRules : [
//     value => {
//       if (value) return true

//       return 'Name is requred.'
//     },
//     value => {
//       if (value?.length <= 10) return true

//       return 'Name must be less than 10 characters.'
//     },
//   ],
// }

// export nameRules =[
//   value => {
//     if (value) return true

//     return 'Name is requred.'
//   },
//   value => {
//     if (value?.length <= 10) return true

//     return 'Name must be less than 10 characters.'
//   },
// ],

// export emailRules: [
//   value => {
//     if (value) return true

//     return 'E-mail is requred.'
//   },
//   value => {
//     if (/.+@.+\..+/.test(value)) return true

//     return 'E-mail must be valid.'
//   },
// ],
