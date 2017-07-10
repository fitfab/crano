import React from 'react'

import {
    Form,
    ControlInput,
    ControlSelect,
    ControlRadioOrCheckbox } from '../components/form'

import './404.css'
import '../components/form/form.css';

export default () => (
    <div>
        <p className="flash-message"><b>404</b> This ain't ready kid,</p>

        <Form handleSubmit={(data) => {  console.log('this will be a call to a redux action:',data);}}>

            <ControlInput
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
                options={['Monday', 'Tuesday', 'Thursday', 'Friday']}
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
    </div>
)
