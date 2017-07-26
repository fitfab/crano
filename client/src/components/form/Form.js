import React, { Component } from 'react';
import {
    children,
    func
} from 'prop-types';

/**
 * Helper Function to get all input fields from the form
 * @param  {Array} list All the children from the form
 * @return {Array}      return an array with only input fields
 */
function getInputs(list) {
    let out =[]

    function loop(list) {
        list.filter((input) => {
            let props, children;
            props = input.props;
            children = props && props.children;

            if( input.constructor === Array ) {
                loop(input)

            } else if(props && children && children.constructor === Array) {
                loop(input.props.children)
            }

            if(typeof input.type !== 'string' && input.constructor !== Array) {
                out.push(input)
            }
            return input
        })
    }
    loop(list)
    return out;
}


export default class Form extends Component {

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
        const inputs = getInputs(this.props.children)
        for (let child in inputs) {
            let input = inputs[child];
                this.stateFromInput(input)
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
