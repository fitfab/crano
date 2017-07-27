import React, { PureComponent } from 'react'
import {
    array,
    oneOf,
    string } from 'prop-types';

export default class ControlRadioOrCheckbox extends PureComponent {
    static propTypes = {
        label: string.isRequired,
        name: string.isRequired,
        type: oneOf(['radio', 'checkbox']).isRequired,
        options: array.isRequired,
        selectedOptions: array
    }

    _renderLabel(label) {
        if (!label) {
            return null
        }
        return(
            <label>{label}</label>
        )
    }

    render() {
        const {
            label,
            name,
            type,
            options,
            selectedOptions
        } = this.props
        return (
            <div className="control-radio-checkbox">
                {this._renderLabel(label)}
                <div className="control-input-group">
                    {options.map(opt => {
                        return(
                            <label key={opt} className="check-radio-label">
                                <input
                                    className="check-radio-input"
                                    name={name}
                                    defaultValue={opt}
                                    defaultChecked={selectedOptions.indexOf(opt) > -1}
                                    type={type} /> <span>{opt}</span>
                            </label>
                        )
                    })}
                </div>

            </div>
        )
    }
}
