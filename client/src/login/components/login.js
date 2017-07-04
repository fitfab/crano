import React, { Component } from 'react';

import LoginReduxForm from './login-form'
import '../login.css';
export default class Login extends Component {

    handleSubmit =() => {
        console.log(this.props);
    }

    render() {
        return (
            <div>
            <LoginReduxForm onSubmit={this.handleSubmit} />
            </div>
        )
    }

}
