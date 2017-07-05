import React from 'react'
import { Field, reduxForm } from 'redux-form'

//import { validate, warn } from '../validate'
import RenderField from './renderField'


const NavForm = props => {
    const { handleSubmit, initialValues } = props
    console.log('nav props: ',props)
    return(
        <form onSubmit={handleSubmit}>
            <h3>Edit Navigation</h3>
                {initialValues.map((item, index) => {
                    console.log(item.href)
                    return (
                        <div key={index}>
                            <Field
                                label={item.title}
                                name={item.title}
                                type="text"
                                component={RenderField} />
                            <Field
                                label={item.href}
                                name={item.href}
                                type="text"
                                component={RenderField} />
                        </div>
                    )
                })}


            <div className="field">
                <input type="submit" value="update" />
            </div>
        </form>
    )
}

const NavReduxForm = reduxForm({
    form: 'nav-form'
})(NavForm)

export default NavReduxForm;
