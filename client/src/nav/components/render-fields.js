import React from 'react'

const renderFields = (fields) => (
  <div>
    <div className="input-row">
      <input {...fields.title.input} type="text"/>
      {fields.title.meta.touched && fields.title.meta.error &&
       <span className="error">{fields.title.meta.error}</span>}
    </div>
    <div className="input-row">
      <input {...fields.href.input} type="text"/>
      {fields.href.meta.touched && fields.href.meta.error &&
       <span className="error">{fields.href.meta.error}</span>}
    </div>
  </div>
)

export default renderFields
