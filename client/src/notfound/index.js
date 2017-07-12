import React, { Component } from 'react'

import Notfound from './not-found'

export default class extends Component {

    handleSubmit(e) {
        e.preventDefault()
        console.log(e)
    }

    render() {
        return(
            <Notfound handleSubmit={this.handleSubmit} />
        )
    }
}
