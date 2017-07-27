import React, { PureComponent } from 'react';
import {
    array,
    string
} from 'prop-types';

export default class ControlSelect extends PureComponent {

    static propTypes = {
        label: string,
        name: string.isRequired,
        options: array.isRequired,
        selectedOptions: string,
        placeholder: string
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
            selectedOptions,
            options,
            placeholder,
        } = this.props
        return(
            <div className="control-select">
                {this._renderLabel(label)}
                <div className="select-input">
                    <select
                        name={name}
                        defaultValue={selectedOptions} >
                        <option value="">{placeholder}</option>
                        {options.map(opt => {
                            return (
                                <option
                                    key={opt}
                                    value={opt}>
                                    {opt}
                                </option>
                            )
                        })}
                    </select>
                </div>
            </div>
        )
    }

}
