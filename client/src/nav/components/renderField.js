import React from 'react'

const RenderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
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

export default RenderField
