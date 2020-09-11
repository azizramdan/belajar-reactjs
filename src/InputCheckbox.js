import React from 'react'

export default function InputCheckbox({label, isChecked, onChange}) {
  return (
    <div>
      <label>{label}</label>
        <input type='checkbox' checked={isChecked} onChange={onChange} />
    </div>
  )
}
