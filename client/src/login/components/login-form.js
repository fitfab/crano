import React, { PureComponent } from "react";
import { func } from "prop-types";
import { Field, reduxForm } from "redux-form";

import { validate, warn } from "../validate";
import RenderField from "./renderField";

class LoginForm extends PureComponent {
  static propTypes = {
    handleSubmit: func.isRequired
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <h3>Login User</h3>

        <Field
          label="User Name:"
          name="userName"
          type="text"
          component={RenderField}
        />

        <Field
          label="Password:"
          name="password"
          type="password"
          component={RenderField}
        />

        <div className="field">
          <input type="submit" value="login" />
        </div>
      </form>
    );
  }
}

const LoginReduxForm = reduxForm({
  form: "login-form",
  validate, // Validation function given to the redux-form
  warn // warn function
})(LoginForm);

export default LoginReduxForm;
