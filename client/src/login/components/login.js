import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoginReduxForm from './login-form'
import '../login.css';

export default class Login extends Component {

    static propTypes = {
        LoginActions: PropTypes.object.isRequired,
        Login: PropTypes.object.isRequired
    }

    handleSubmit =(values) => {
        const { loginUser } = this.props.LoginActions
        console.log(values);
        loginUser(values)
        return values => {
            console.log(values)

        }
    }

    render() {
        console.log(this.props);
        const { user } = this.props.Login
        return (
            <LoginReduxForm
                onSubmit={this.handleSubmit}
                initialValues={user} />
        )
    }

}
