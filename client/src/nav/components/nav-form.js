import React, { PureComponent } from "react";
import { func, array } from "prop-types";
import { FieldArray, reduxForm } from "redux-form";

import { RenderList } from "./util-fields";

class NavForm extends PureComponent {
    static propTypes = {
        handleSubmit: func,
        initialValues: array
    };
    render() {
        const { handleSubmit, initialValues } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <h3>Edit Navigation</h3>

                <FieldArray
                    name="navigation"
                    component={RenderList}
                    {...{ fields: initialValues }}
                />

                <div className="field">
                    <input type="submit" value="update" />
                </div>
            </form>
        );
    }
}

const NavReduxForm = reduxForm({
    form: "nav-form"
})(NavForm);

export default NavReduxForm;
