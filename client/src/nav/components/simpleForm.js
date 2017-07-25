import React, { Component } from 'react';

import {FHOC2} from '../../HOC/FormHOC2'

function Field({name, label ,value}) {
    return (
        <label>
            <span>{label}</span>
            <input type="text" name={name} defaultValue={value} />
        </label>
    )
}

class SimpleForm extends Component {

    render() {
        console.log('SimpleForm', this.props)
        return(
            <form onChange={this.props.onChange} onSubmit={this.props.onSubmit}>
                {Field({name: 'lastName', label: 'Last Name:', value: 'Julio'})}
                <button type="submit">Save</button>
            </form>
        )
    }
}

export default FHOC2(SimpleForm)
