import React, { Component } from 'react'

import {
    Form,
    ControlInput,
    ControlSelect,
    ControlRadioOrCheckbox } from '../components/form'
import '../components/form/form.css';

class Customform extends Component {
    save(data){
        console.log(data)
    }

    render() {

        return (
            <Form handleSubmit={this.save}>
                <ControlInput
                    label="User"
                    name="userName"
                    type="text"
                    defaultValue="Miguel"
                    placeholder="enter user a name"
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
            </Form>
        )
    }
}

export default Customform
