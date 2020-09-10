import React from 'react'

const List = () => {
  const fruits = [
    'apel', 'pisang', 'duku', 'durian', 'rambutan'
  ]
  const displayFruits = fruits.map((fruit, index) => <li key={index}>{fruit}</li>)

  return <ul>{displayFruits}</ul>
}

export default List