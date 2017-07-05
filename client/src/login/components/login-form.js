import React from 'react'
import { Field, reduxForm } from 'redux-form'


const LoginForm = props => {
    const { handleSubmit } = props
    console.log('props: ',props)
    return(
        <form onSubmit={handleSubmit}>
            <h3>Login User</h3>
            <div className="field">
                <label htmlFor="userName">User Name: </label>
                <Field name="userName" component="input" type="text" />
            </div>
            <div className="field">
                <label htmlFor="password">Password</label>
                <Field name="password" component="input" type="password" />
            </div>
            <div className="field">
                <input type="submit" value="login" />
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login-form'
})(LoginForm)

export default LoginReduxForm;
