import React from 'react'

const Table = () => {
  const fruits = [
    { id: 1, name: 'apple', color: 'green'},
    { id: 2, name: 'banana', color: 'yellow'},
    { id: 3, name: 'cherry', color: 'red'},
    { id: 4, name: 'grape', color: 'purple'},
    { id: 5, name: 'pear', color: 'white'},
  ]

  return <table border='1'>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Color</th>
      </tr>
    </thead>
    <tbody>
      {fruits.length > 0 && fruits.map(({id, name, color}) => {
        return <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{color}</td>
        </tr>
      })}
    </tbody>
  </table>
}

export default Table