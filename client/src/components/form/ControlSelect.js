import React, { PureComponent } from "react";
import { arrayOf, string } from "prop-types";

export default class ControlSelect extends PureComponent {
    static propTypes = {
        label: string,
        name: string.isRequired,
        options: arrayOf(string).isRequired,
        selectedOptions: string,
        placeholder: string
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
        const { name, selectedOptions, options, placeholder } = this.props;
        return (
            <div className="control-select">
                {this.renderLabel()}
                <div className="select-input">
                    <select name={name} defaultValue={selectedOptions}>
                        <option value="">
                            {placeholder}
                        </option>
                        {options.map(opt =>
                            <option key={opt} value={opt}>
                                {opt}
                            </option>
                        )}
                    </select>
                </div>
            </div>
        );
    }
}
