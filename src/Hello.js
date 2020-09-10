import React from 'react'

const Hello = ({name, greeting}) => <h1>Hello {name} dengan CRA, Selamat {greeting}</h1>

Hello.defaultProps = {
  name: 'World',
  greeting: 'datang '
}

export default Hello