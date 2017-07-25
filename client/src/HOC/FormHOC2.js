import React, { Component } from 'react';

export const FHOC2 = (WrappedComponent) => {
    return class ClickLogger extends Component {

        handleChange = (e) => {
            console.log('handleChange:', e.target.value)
        }

        handleSubmit = (e) => {
            e.preventDefault();
            alert('submit')
        }

        componentDidMount() {
            console.log('mounted', this.props)
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit} />
            )
        }
    }
}
