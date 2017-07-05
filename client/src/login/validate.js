
export function validate(values) {
    const errors = {}
    if(!values.userName) {
        errors.userName = 'Required'
    } else if(values.userName.length < 3) {
        errors.userName = 'User Name must be at least 3 characters'
    }

    if(!values.password) {
        errors.password = 'Required'
    } else if(values.password.length < 3) {
        errors.password = 'password must be at least 3 characters'
    }

    return errors
}

export function warn(values){
    const warnings = {}
    if (values.password.length < 5) {
    warnings.password = 'Hmm, it seems easy to guess...'
  }
  return warnings
}
