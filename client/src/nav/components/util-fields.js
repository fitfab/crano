import React from 'react'
import { Field } from 'redux-form'

/**
 * Render one input field
 */
export function RenderField({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) {
    return(
        <div className="field">
            <label>{label}</label>
            <div className="field__input">
              <input {...input} placeholder={label} type={type} />
              {touched &&
                ((error && <span className="error">{error}</span>) ||
                  (warning && <span className="warning">{warning}</span>))}
            </div>
        </div>
    )
}

export function RenderSubFields(item, index, fields) {
    return(
        <div key={index}>
            <Field
                label={item.title}
                name={item.title}
                type="text"
                component={RenderField} />
            <Field
                label={item.href}
                name={item.href}
                type="text"
                component={RenderField} />
        </div>
    )
}


export function RenderList({ fields, meta: { touched, error } }) {
    return (
        <div>
            {fields.map((item, index) =>
                <div key={index}>
                    <Field
                        label={item.title}
                        name={item.title}
                        type="text"
                        component={RenderField} />
                    <Field
                        label="href"
                        name={item.href}
                        type="text"
                        component={RenderField} />
                </div>
            )}
        </div>
    )
}
