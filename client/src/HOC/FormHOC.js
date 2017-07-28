import React, { Component } from 'react'
import hoistNonReactStatic from 'hoist-non-react-statics'

/**
 * Gets all input fields from the form
 * @param  {Array} list All the children from the form
 * @return {Array}      return only input fields
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

/**
 * [FormHOC description]
 * @param       {[type]} enhancedComponent [description]
 * @constructor
 */
function FormHOC(WrappedComponent) {
    class Enhanced extends Component {
        state = {}

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
            console.log('this.props.children: ', this.props)
            const inputs = getInputs(this.props.children)
            for (let child in inputs) {
                let input = inputs[child];
                    this.stateFromInput(input)
            }
        }

        render() {
            return <WrappedComponent
                        {...this.props}
                        onChange={this.props.handleChange}
                        onSubmit={this.props.handleClickSubmit}
                        {...this.state} />
        }
    }
    hoistNonReactStatic(Enhanced, WrappedComponent);
    return Enhanced
}

export default FormHOC;
