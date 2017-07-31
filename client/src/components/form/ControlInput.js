import React, { PureComponent } from "react";
import { string, oneOf } from "prop-types";
/**
 * ControlInput state maneged by the parent form
 * @param       {object} props input required properties
 * @constructor
 */
export default class ControlInput extends PureComponent {
    static propTypes = {
        label: string,
        name: string.isRequired,
        type: oneOf(["text", "number", "email", "password"]).isRequired,
        defaultValue: string,
        inputPlaceholder: string
    };

    renderLabel() {
        if (!this.props.label) {
            return null;
        }
        return (
            <label htmlFor={this.props.name}>
                {this.props.label}
            </label>
        );
    }

    render() {
        const { name, type, defaultValue, inputPlaceholder } = this.props;
        return (
            <div className="control-input">
                {this.renderLabel()}
                <input
                    className="control-input__input"
                    name={name}
                    type={type}
                    defaultValue={defaultValue}
                    placeholder={inputPlaceholder}
                />
            </div>
        );
    }
}
