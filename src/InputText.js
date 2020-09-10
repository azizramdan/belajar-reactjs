import React from 'react'

export default function InputText({label, value, onChange}) {
  return (
    <div>
      <label>{label}</label>
      <input type='text' value={value} onChange={onChange} />
    </div>
  )
}
