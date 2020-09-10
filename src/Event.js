import React from 'react'

const Event = ({onCustomClick, text}) => {
  return <div>
    <button onClick={onCustomClick}>{text}</button>
  </div>
}

export default Event