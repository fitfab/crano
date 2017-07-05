import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavReduxForm from './nav-form'
import '../nav.css';

export default class Nav extends Component {

    static propTypes = {
        NavActions: PropTypes.object.isRequired,
        Nav: PropTypes.object.isRequired
    }

    handleSubmit =(values) => {
        console.log('handleSubmit Nav: ',values);
    }

    componentDidMount() {
        const { fetchNav } = this.props.NavActions
        fetchNav()
    }

    shouldComponentUpdate(nextProps) {
        return (nextProps.Nav.nav)
    }


    render() {
        const { nav } = this.props.Nav

        return (nav && (<NavReduxForm
            onSubmit={this.handleSubmit}
            initialValues={nav} />))
    }

}
