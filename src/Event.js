import React from 'react'

const Event = () => {
  return <div>
    <button onClick={() => window.alert('button di klik')}>Klik aing</button>
    <button onMouseEnter={() => console.log('mouse masuk')} onMouseOut={() => console.log('mouse keluar')}>Hover urang</button>
  </div>
}

export default Event