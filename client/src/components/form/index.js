import React, { Component } from 'react';
import { children, func } from 'prop-types';

export class Form extends Component {

    state = {
    }

    static PropTypes = {
        children: children,
        handleSubmit: func.isRequired
    }

    handleChange = (event) => {
        let { target } = event;
        let { name, value, type } = target;

        value  = type === 'checkbox' ?
            target.checked :
            value;
        if(type === 'checkbox') {
            this.state.checkboxes.push({[`${name}`]: value})
        } else {
            this.setState({
                [`${name}`]: value
              });
        }

    }

    handleClickSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
    }

    componentDidMount() {
        let name;
        let value;
        let stateFromProps = {};
        let checkboxes= [];
        let oneCheckBox;
        const out = this.props.children.map((item) => {

            if(item.props.type === 'text' || item.props.type === 'checkbox') {
                name = item.props.name;
                value = item.props.type === 'checkbox'? item.props.checked : item.props.defaultValue;
                if(item.props.type === 'checkbox') {
                    oneCheckBox = {
                        [`${name}`]: value
                    }

                    checkboxes.push(oneCheckBox)
                } else {

                    stateFromProps[`${name}`] = value || '';
                }

            }

            stateFromProps[`checkboxes`] = checkboxes;
            return stateFromProps;
        })

        this.setState(stateFromProps)

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





export const CHECKBOX = 'CHECKBOX';
export const CHECKBOXES = 'CHECKBOXES';

export function CheckBoxControl(key, props) {
    console.log(key, props )
  switch (key) {
    case CHECKBOX:
      return (
        <input type="checkbox" name={props.options.name} />
      );

    case CHECKBOXES:
      return (
        <div>
          {props.options.map((option, index) => (
            <label key={index} className="checkbox">
                {option.label}
                <input type="checkbox"
                    name={`${option.label}`}
                    defaultValue={option.value}
                    />
            </label>
          ))}
        </div>
      );

    default:
      return null;
  }
}
