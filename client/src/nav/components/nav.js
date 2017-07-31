import React, { Component } from "react";
import PropTypes from "prop-types";

import NavReduxForm from "./nav-form";
import "../nav.css";

class Nav extends Component {
    static propTypes = {
        NavActions: PropTypes.object.isRequired,
        Nav: PropTypes.object.isRequired
    };

    componentDidMount() {
        const { fetchNav } = this.props.NavActions;
        fetchNav();
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.Nav.nav !== null;
    }
    /* eslint no-console: "off" */
    handleSubmit = values => {
        console.log("handleSubmit Nav: ", values);
    };

    render() {
        const { nav } = this.props.Nav;

        return (
            nav &&
            <NavReduxForm onSubmit={this.handleSubmit} initialValues={nav} />
        );
    }
}

export default Nav;
