import React, { Component } from 'react'

import {
    ControlInput,
    ControlRadioOrCheckbox,
    ControlSelect,
    Form
} from '../components/form'

import '../components/form/form.css';

let myData = [
    {
        label: 'News',
        href: '/news',
        copy: 'Art News'
    },
    {
        label: 'Artist',
        href: '/artist',
        copy: 'Browse by Artists'
    },
    {
        label: 'Products',
        href: '/products',
        copy: 'Unique Products'
    },
    {
        label: 'Account',
        href: '/account',
        copy: 'My Account'
    },
]

class Customform extends Component {
    save(data){
        console.log(data)
    }

    render() {

        return (
            <Form handleSubmit={this.save}>
                <h2>Custom Form</h2>
                { myData.map((item, index) => {
                    return(
                        <div key={index} className="inline-input">
                            <ControlInput
                                label={item.label}
                                name={item.label}
                                type="text"
                                defaultValue={item.copy}
                                placeholder={`Enter ${item.label}`}
                                />
                            <ControlInput
                                label="href"
                                name={`${item.label}Href`}
                                type="text"
                                defaultValue={item.href}
                                placeholder={`Enter href for ${item.label}`}
                                />
                        </div>
                    )
                })}

                <ControlSelect
                    label="Select a Weekday"
                    name="weekdays"
                    type="select one"
                    options={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']}
                    selectedOptions="Friday"
                    placeholder="Select your weekday"
                    />

                <ControlRadioOrCheckbox
                    label="Check all the hobbies you got"
                    name="hobbies"
                    type="checkbox"
                    options={['Renovation', 'Gardening', 'Cooking', 'Dancing', 'Fitness']}
                    selectedOptions={['Renovation', 'Dancing']}
                    />

                <ControlRadioOrCheckbox
                    label="Choose the only one"
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
