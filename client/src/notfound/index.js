import React from 'react'

import {Form, CheckBoxControl } from '../components/form'

import './404.css'
const weekdayOptions = [
  { value: 1, label: 'Monday' },
  { value: 2, label: 'Tuesday' },
  { value: 3, label: 'Wednesday' },
  { value: 4, label: 'Thursday' },
  { value: 5, label: 'Friday' },
  { value: 6, label: 'Saturday' },
  { value: 7, label: 'Sunday' },
];
export default () => (
    <div>
        <p><b>404</b> This ain't ready kid,</p>

        <Form handleSubmit={(data) => {  console.log('this will be a call to a redux action:',data);}}>
            <input type="text" name="firstName" placeholder="First Name" />
            <input type="text" name="lastName" placeholder="last Name" />


            {CheckBoxControl('CHECKBOXES',{options: weekdayOptions})}


            <button type="submit">Save</button>
        </Form>
    </div>
)
