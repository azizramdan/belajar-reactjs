import React, { useState } from 'react'
import InputText from './InputText';

export default function FormInput() {
  const [name, setName] = useState('Nama saya')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log({name});
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <InputText label='Name' value={name} onChange={(e) => setName(e.target.value)} />
      <button type='submit'>Submit</button>
    </form>
  )
}
