import React from 'react'
import { FieldArray, reduxForm } from 'redux-form'

import { RenderList } from './util-fields'



const NavForm = props => {
    const { handleSubmit, initialValues } = props
    return(
        <form onSubmit={handleSubmit}>
            <h3>Edit Navigation</h3>

                <FieldArray name="navigation" component={RenderList} {...{fields: initialValues}} />

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
