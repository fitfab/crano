import React, { PureComponent } from "react";
import { arrayOf, oneOf, string } from "prop-types";

export default class ControlRadioOrCheckbox extends PureComponent {
    static propTypes = {
        label: string.isRequired,
        name: string.isRequired,
        type: oneOf(["radio", "checkbox"]).isRequired,
        options: arrayOf(string).isRequired,
        selectedOptions: arrayOf(string)
    };

    renderGroupLabel() {
        if (!this.props.label) {
            return null;
        }
        return (
            <h3>
                {this.props.label}
            </h3>
        );
    }

    render() {
        const { name, type, options, selectedOptions } = this.props;
        return (
            <div className="control-radio-checkbox">
                {this.renderGroupLabel()}
                <div className="control-input-group">
                    {options.map(opt =>
                        <label
                            key={opt}
                            htmlFor={name}
                            className="check-radio-label"
                        >
                            <input
                                className="check-radio-input"
                                name={name}
                                defaultValue={opt}
                                defaultChecked={
                                    selectedOptions.indexOf(opt) > -1
                                }
                                type={type}
                            />{" "}
                            <span>{opt}</span>
                        </label>
                    )}
                </div>
            </div>
        );
    }
}
