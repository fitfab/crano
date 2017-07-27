import React, { PureComponent } from 'react';
import {
    string,
    oneOf
} from 'prop-types';
/**
 * ControlInput state maneged by the parent form
 * @param       {object} props input required properties
 * @constructor
 */
export default class ControlInput extends PureComponent {
    static propTypes = {
        label: string,
        name: string.isRequired,
        type: oneOf(['text', 'number', 'email', 'password']).isRequired,
        defaultValue: string,
        inputPlaceholder: string
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
            defaultValue,
            inputPlaceholder
        } = this.props
        return (
            <div className="control-input">
                {this._renderLabel(label)}
                <input
                    className="control-input__input"
                    name={name}
                    type={type}
                    defaultValue={defaultValue}
                    placeholder={inputPlaceholder}
                    />
            </div>
        )
    }
}
