import React from 'react'

const UncontrolledForm = () => {
  const inputName = React.useRef(null)
  const inputFile = React.useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(inputName.current.value);
    console.log(inputFile.current.files[0] ? inputFile.current.files[0].name : 'belum memilih file');
  }

  return <form onSubmit={handleSubmit}>
    <div>
      <label>Name</label>
      <input type='text' ref={inputName} defaultValue='Aziz Ramdan' />
    </div>
    <div>
      <label>File</label>
      <input type='file' ref={inputFile} />
    </div>
    <button type='submit'>Submit</button>
  </form>
}

export default UncontrolledForm