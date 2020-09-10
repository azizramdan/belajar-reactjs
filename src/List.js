import React from 'react'

const List = () => {
  const fruits = [
    'apel', 'pisang', 'duku', 'durian', 'rambutan'
  ]

  return <ul>
    {fruits.length > 0 && fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
    </ul>
}

export default List