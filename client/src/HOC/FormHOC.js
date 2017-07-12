import React, { Component } from 'react'

import {
    array,
    children,
    func,
    number,
    oneOf,
    oneOfType,
    string } from 'prop-types';

const FormHOC = (EnhancedComponent) => {
    return class extends Component {

        state = { }

        componentWillMount() {

            for (let child in this.props.children) {
                let input = this.props.children[child];

                if(input.props.type === 'checkbox' || input.props.type === 'radio') {
                    this.setState({ [input.props.name]:  input.props.selectedOptions || []})
                } else if(input.props.type === 'select one') {
                    this.setState({ [input.props.name]:  input.props.selectedOptions ||''})
                } else if(input.props.type !== 'submit' && input.props.name){
                    this.setState({ [input.props.name]:  input.props.defaultValue || ''})
                }
            }
            console.log('FormHOC: componentWillMount', this.state)
        }

        static PropTypes = {
            children: children,
            handleSubmit: func.isRequired
        }

        handleCheckbox(target) {
            const { name, value } = target;
            let newSelectionArray;
            console.log(value)
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
            console.log('handle change')
            if(type === 'checkbox') {
                this.handleCheckbox(target)
            } else {
                this.setState({
                    [name]: value
                  });
            }

        }

        render() {
            console.log('FormHOC: render', this.props)
            return (<EnhancedComponent {...this.props} onChange={this.handleChange} />)
        }
    }
}

export default FormHOC
