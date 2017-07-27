import React, { Component } from 'react'

const LoaderHOC = (connect) => (EnhancedComponent) => {
    return class LoaderHOC extends Component {
        isEmpty(prop) {
            return (
                prop === null ||
                prop === undefined ||
                (prop.hasOwnProperty('length') && prop.length === 0) ||
                (prop.constructor === Object && Object.key(prop).length ===0 )
            )
        }
        render() {

            const { state, propName } = connect
            const lookup = state ? this.props[`${state}`][`${propName}`] :
                this.props[`${propName}`]
            return this.isEmpty(lookup) ?
                <div className="loader">loading</div> :
                <EnhancedComponent {...this.props} />
        }
    }
}

export default LoaderHOC
