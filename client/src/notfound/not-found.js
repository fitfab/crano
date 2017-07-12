import React, { Component } from 'react'

import {
    ControlInput,
    ControlSelect,
    ControlRadioOrCheckbox } from '../components/form'
import FormHOC from '../HOC/FormHOC'

import './404.css'
import '../components/form/form.css';

function Notfound(props) {
    return (

        <form onSubmit={props.handleSubmit} onChange={(e) => console.log(e.target)}>
            <p className="flash-message"><b>404</b> This ain't ready kid,</p>
            <ControlInput
                className="custom"
                label="email"
                name="ownerEmail"
                type="email"
                defaultValue="miguel@mail.com"
                placeholder="Please enter your email"
                />

            <ControlSelect
                label="Weekdays"
                name="weekdays"
                type="select one"
                options={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']}
                selectedOptions="Friday"
                placeholder="Select your weekday"
                />

            <ControlRadioOrCheckbox
                label="Hobbies"
                name="hobbies"
                type="checkbox"
                options={['Renovation', 'Gardening', 'Cooking', 'Dancing', 'Fitness']}
                selectedOptions={['Renovation', 'Dancing']}
                />

            <ControlRadioOrCheckbox
                label="Best Movie"
                name="bestMovie"
                type="radio"
                options={['You and I', 'Gardening Along', 'Cooking Nowadays', 'The Sun INTI', 'Health']}
                selectedOptions={['You and I']}
                />

            <button type="submit">Save</button>
        </form>

    )
}

/**
const HOC = (InnerComponent) => class extends Component {
    render() {
        console.log('HOC: ', this.props)
        return (<InnerComponent {...this.props} />)
    }
}

class Notfound extends Component {
    render() {
        return (
            <Form>
                <input name="firstName" type="text" placeholder="Enter your name" />
            </Form>
        )
    }
}

const Form = HOC((props) => <form>{props.children}</form>)
**/
export default FormHOC(Notfound)
