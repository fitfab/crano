import React, { Component } from 'react';
import {
    array,
    children,
    func,
    number,
    oneOf,
    oneOfType,
    string } from 'prop-types';

export class Form extends Component {

    state = {
    }

    static PropTypes = {
        children: children,
        handleSubmit: func.isRequired
    }

    handleCheckbox(target) {
        const { name, value } = target;
        let newSelectionArray;
        if(this.state[name].indexOf(value) > -1) {
            newSelectionArray = this.state[name].filter(v => v !== value)
        } else {
            newSelectionArray = [ ...this.state[name], value]
        }
        this.setState({
            [name]:newSelectionArray
        })
    }

    handleChange = (event) => {
        let { target } = event;
        let { name, value, type } = target;

        if(type === 'checkbox') {
            this.handleCheckbox(target)
        } else {
            this.setState({
                [name]: value
              });
        }

    }

    handleClickSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
    }

    stateFromInput(input){
        if(input.props.type === 'checkbox' || input.props.type === 'radio') {
            this.setState({ [input.props.name]:  input.props.selectedOptions || []})
        } else if(input.props.type === 'select one') {
            this.setState({ [input.props.name]:  input.props.selectedOptions ||''})
        } else if(input.props.type !== 'submit' && input.props.name){
            this.setState({ [input.props.name]:  input.props.defaultValue || ''})
        }
    }


    componentWillMount() {
        for (let child in this.props.children) {
            let input = this.props.children[child];
            if(input.type instanceof Function || input.type === 'input') {
                this.stateFromInput(input)
            }
        }

    }

    render() {
        const { children } = this.props

        return (
            <form onSubmit={this.handleClickSubmit} onChange={this.handleChange}>
                {children}
            </form>
        )
    }

}

/**
 * ControlInput state maneged by the parent form
 * @param       {object} props input required properties
 * @constructor
 */
export function ControlInput(props) {
    return (
        <div className="control-input">
            <label>{props.label}</label>
            <input
                className="control-input__input"
                name={props.name}
                type={props.type}
                defaultValue={props.defaultValue}
                placeholder={props.inputPlaceholder}
                />
        </div>
    )
}

ControlInput.propTypes = {
    type: oneOf(['text', 'number', 'email', 'password']).isRequired,
    label: string.isRequired,
    name: string.isRequired,
    value: oneOfType([
        string,
        number
    ]),
    placeholder: string,
}
// ----------- END: ControlInput ----------- //

/**
 * ControlSelect state maneged by the parent form
 * @param       {object} props input required properties
 * @constructor
 */
export function ControlSelect(props) {
    return(
        <div className="control-select">
            <label>{props.label}</label>
            <div className="select-input">
                <select
                    name={props.name}
                    defaultValue={props.selectedOptions} >
                    <option value="">{props.placeholder}</option>
                    {props.options.map(opt => {
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

ControlSelect.propTypes = {
    label: string,
    name: string,
    options: array.isRequired,
    selectedOptions: string,
    placeholder: string
}

// ----------- END: ControlSelect ----------- //

export function ControlRadioOrCheckbox(props) {
    return (
        <div className="control-radio-checkbox">
            <label>{props.label}</label>
            <div className="control-input-group">
                {props.options.map(opt => {
                    return(
                        <label key={opt} className="check-radio-label">
                            <input
                                className="check-radio-input"
                                name={props.name}
                                defaultValue={opt}
                                defaultChecked={props.selectedOptions.indexOf(opt) > -1}
                                type={props.type} /> <span>{opt}</span>
                        </label>
                    )
                })}
            </div>

        </div>
    )
}

ControlRadioOrCheckbox.propTypes = {
    label: string.isRequired,
    name: string.isRequired,
    type: string.isRequired,
    options: array.isRequired,
    selectedOptions: array
}
// ----------- END: ControlRadioOrCheckbox ----------- //
