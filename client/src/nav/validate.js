
export function validate(values) {
    const errors = {}
    if(!values.title) {
        errors.title = 'Required'
    } else if(values.title.length < 3) {
        errors.title = 'Must be at least 3 characters'
    }

    return errors
}

export function warn(values){
    const warnings = {}
    if (values.title.length < 5) {
    warnings.title = 'This is a weak password!'
  }
  return warnings
}
