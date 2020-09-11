import React, { useState } from 'react'
import InputText from './InputText';
import InputCheckbox from './InputCheckbox';

export default function FormInput() {
  const [name, setName] = useState('Nama saya')
  const [isMember, setIsMember] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log({name, isMember});
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <InputText label='Name' value={name} onChange={(e) => setName(e.target.value)} />
      <InputCheckbox label='Member' isChecked={isMember} onChange={(e) => setIsMember(e.target.checked)} />
      <button type='submit'>Submit</button>
    </form>
  )
}
