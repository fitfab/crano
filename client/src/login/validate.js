
export function validate(values) {
    const errors = {}
    if(!values.userName) {
        errors.userName = 'Required'
    } else if(values.userName.length < 3) {
        errors.userName = 'Must be at least 3 characters'
    }

    if(!values.password) {
        errors.password = 'Required'
    } else if(values.password.length < 3) {
        errors.password = 'Must be at least 3 characters'
    }

    return errors
}

export function warn(values){
    const warnings = {}
    if (values.password.length < 5) {
    warnings.password = 'This is a weak password!'
  }
  return warnings
}
