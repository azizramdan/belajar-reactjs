import React, { useState } from 'react'

export default function ControlledForm() {
  const [name, setName] = useState('')
  const [isMember, setIsMember] = useState(false)
  const [gender, setGender] = useState('male')
  const [comment, setComment] = useState('')
  const [category, setCategory] = useState('food')

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {name, isMember, gender, comment, category}

    console.log(formData);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Member</label>
        <input type='checkbox' checked={isMember} onChange={(e) => setIsMember(e.target.checked)} />
      </div>
      <div>
        <label>Gender</label>
        <input type='radio' name='gender' checked={gender === 'male'} onChange={(e) => setGender('male')} /> Male
        <input type='radio' name='gender' checked={gender === 'female'} onChange={(e) => setGender('female')} /> Female
      </div>
      <div>
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value='food'>Food</option>
          <option value='drink'>Drink</option>
        </select>
      </div>
      <div>
        <label>Comment</label>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}
