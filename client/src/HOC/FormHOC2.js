/* eslint no-console: "off" */
import React, { Component } from 'react';

const FHOC2 = WrappedComponent => class ClickLogger extends Component {
        state = {}

        handleChange = (e) => {
            console.log('handleChange:', e.target.value);
            const { name, value } = e.target;
            this.setState({
                [name]: value
            })
            console.log('handleChange:', value)
        }

        handleSubmit = (e) => {
            e.preventDefault();
            console.log(this.state);
        }

        componentDidMount() {
            console.log('mounted', this);
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                />
            );
        }
};

export default FHOC2;
